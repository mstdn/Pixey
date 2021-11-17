<?php

namespace App\Http\Controllers;

use App\{
	AccountInterstitial,
	Contact,
	Hashtag,
	Newsroom,
	OauthClient,
	Profile,
	Report,
	Status,
	Story,
	User
};
use DB, Cache;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\Admin\{
	AdminDiscoverController,
	AdminInstanceController,
	AdminReportController,
	AdminMediaController,
	AdminSettingsController,
	AdminSupportController,
	AdminUserController
};
use Illuminate\Validation\Rule;
use App\Services\AdminStatsService;
use App\Services\StatusService;
use App\Services\StoryService;

class AdminController extends Controller
{
	use AdminReportController, 
	AdminDiscoverController,
	AdminMediaController, 
	AdminSettingsController, 
	AdminInstanceController,
	AdminUserController;

	public function __construct()
	{
		$this->middleware('admin');
		$this->middleware('dangerzone');
		$this->middleware('twofactor');
	}

	public function home()
	{
		$data = AdminStatsService::get();
		return view('admin.home', compact('data'));
	}

	public function statuses(Request $request)
	{
		$statuses = Status::orderBy('id', 'desc')->cursorPaginate(10);
		$data = $statuses->map(function($status) {
			return StatusService::get($status->id, false);
		})
		->filter(function($s) {
			return $s;
		})
		->toArray();
		return view('admin.statuses.home', compact('statuses', 'data'));
	}

	public function showStatus(Request $request, $id)
	{
		$status = Status::findOrFail($id);

		return view('admin.statuses.show', compact('status'));
	}

	public function profiles(Request $request)
	{
		$this->validate($request, [
			'search' => 'nullable|string|max:250',
			'filter' => [
				'nullable',
				'string',
				Rule::in(['all', 'local', 'remote'])
			]
		]);
		$search = $request->input('search');
		$filter = $request->input('filter');
		$limit = 12;
		$profiles = Profile::select('id','username')
			->whereNull('status')
			->when($search, function($q, $search) {
				return $q->where('username', 'like', "%$search%");
			})->when($filter, function($q, $filter) {
				if($filter == 'local') {
					return $q->whereNull('domain');
				}
				if($filter == 'remote') {
					return $q->whereNotNull('domain');
				}
				return $q;
			})->orderByDesc('id')
			->simplePaginate($limit);

		return view('admin.profiles.home', compact('profiles'));
	}

	public function profileShow(Request $request, $id)
	{
		$profile = Profile::findOrFail($id);
		$user = $profile->user;
		return view('admin.profiles.edit', compact('profile', 'user'));
	}

	public function appsHome(Request $request)
	{
		$filter = $request->input('filter');
		if(in_array($filter, ['revoked'])) {
			$apps = OauthClient::with('user')
			->whereNotNull('user_id')
			->whereRevoked(true)
			->orderByDesc('id')
			->paginate(10);
		} else {
			$apps = OauthClient::with('user')
			->whereNotNull('user_id')
			->orderByDesc('id')
			->paginate(10);
		}
		return view('admin.apps.home', compact('apps'));
	}

	public function hashtagsHome(Request $request)
	{
		$hashtags = Hashtag::orderByDesc('id')->paginate(10);
		return view('admin.hashtags.home', compact('hashtags'));
	}

	public function messagesHome(Request $request)
	{
		$messages = Contact::orderByDesc('id')->paginate(10);
		return view('admin.messages.home', compact('messages'));
	}

	public function messagesShow(Request $request, $id)
	{
		$message = Contact::findOrFail($id);
		return view('admin.messages.show', compact('message'));
	}

	public function messagesMarkRead(Request $request)
	{
		$this->validate($request, [
			'id' => 'required|integer|min:1'
		]);
		$id = $request->input('id');
		$message = Contact::findOrFail($id);
		if($message->read_at) {
			return;
		}
		$message->read_at = now();
		$message->save();
		return;
	}

	public function newsroomHome(Request $request)
	{
		$newsroom = Newsroom::latest()->paginate(10);
		return view('admin.newsroom.home', compact('newsroom'));
	}

	public function newsroomCreate(Request $request)
	{
		return view('admin.newsroom.create');
	}

	public function newsroomEdit(Request $request, $id)
	{
		$news = Newsroom::findOrFail($id);
		return view('admin.newsroom.edit', compact('news'));
	}

	public function newsroomDelete(Request $request, $id)
	{
		$news = Newsroom::findOrFail($id);
		$news->delete();
		return redirect('/i/admin/newsroom');
	}

	public function newsroomUpdate(Request $request, $id)
	{
		$this->validate($request, [
			'title' => 'required|string|min:1|max:100',
			'summary' => 'nullable|string|max:200',
			'body'  => 'nullable|string'
		]);
		$changed = false;
		$changedFields = [];
		$news = Newsroom::findOrFail($id);
		$fields = [
			'title' => 'string',
			'summary' => 'string',
			'body' => 'string',
			'category' => 'string',
			'show_timeline' => 'boolean',
			'auth_only' => 'boolean',
			'show_link' => 'boolean',
			'force_modal' => 'boolean',
			'published' => 'published'
		];
		foreach($fields as $field => $type) {
			switch ($type) {
				case 'string':
				if($request->{$field} != $news->{$field}) {
					if($field == 'title') {
						$news->slug = str_slug($request->{$field});
					}
					$news->{$field} = $request->{$field};
					$changed = true;
					array_push($changedFields, $field);
				}
				break;

				case 'boolean':
				$state = $request->{$field} == 'on' ? true : false;
				if($state != $news->{$field}) {
					$news->{$field} = $state;
					$changed = true;
					array_push($changedFields, $field);
				}
				break;
				case 'published':
				$state = $request->{$field} == 'on' ? true : false;
				$published = $news->published_at != null;
				if($state != $published) {
					$news->published_at = $state ? now() : null;
					$changed = true;
					array_push($changedFields, $field);
				}
				break;

			}
		}

		if($changed) {
			$news->save();
		}
		$redirect = $news->published_at ? $news->permalink() : $news->editUrl();
		return redirect($redirect);
	}


	public function newsroomStore(Request $request)
	{
		$this->validate($request, [
			'title' => 'required|string|min:1|max:100',
			'summary' => 'nullable|string|max:200',
			'body'  => 'nullable|string'
		]);
		$changed = false;
		$changedFields = [];
		$news = new Newsroom();
		$fields = [
			'title' => 'string',
			'summary' => 'string',
			'body' => 'string',
			'category' => 'string',
			'show_timeline' => 'boolean',
			'auth_only' => 'boolean',
			'show_link' => 'boolean',
			'force_modal' => 'boolean',
			'published' => 'published'
		];
		foreach($fields as $field => $type) {
			switch ($type) {
				case 'string':
				if($request->{$field} != $news->{$field}) {
					if($field == 'title') {
						$news->slug = str_slug($request->{$field});
					}
					$news->{$field} = $request->{$field};
					$changed = true;
					array_push($changedFields, $field);
				}
				break;

				case 'boolean':
				$state = $request->{$field} == 'on' ? true : false;
				if($state != $news->{$field}) {
					$news->{$field} = $state;
					$changed = true;
					array_push($changedFields, $field);
				}
				break;
				case 'published':
				$state = $request->{$field} == 'on' ? true : false;
				$published = $news->published_at != null;
				if($state != $published) {
					$news->published_at = $state ? now() : null;
					$changed = true;
					array_push($changedFields, $field);
				}
				break;

			}
		}

		if($changed) {
			$news->save();
		}
		$redirect = $news->published_at ? $news->permalink() : $news->editUrl();
		return redirect($redirect);
	}

	public function diagnosticsHome(Request $request)
	{
		return view('admin.diagnostics.home');
	}

	public function diagnosticsDecrypt(Request $request)
	{
		$this->validate($request, [
			'payload' => 'required'
		]);

		$key = 'exception_report:';
		$decrypted = decrypt($request->input('payload'));

		if(!starts_with($decrypted, $key)) {
			abort(403, 'Can only decrypt error diagnostics');
		}

		$res = [
			'decrypted' => substr($decrypted, strlen($key))
		];

		return response()->json($res);
	}

	public function stories(Request $request)
	{
		$stories = Story::with('profile')->latest()->paginate(10);
		$stats = StoryService::adminStats();
		return view('admin.stories.home', compact('stories', 'stats'));
	}
}
