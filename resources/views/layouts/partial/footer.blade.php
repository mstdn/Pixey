@if(config('instance.restricted.enabled') == false)
  <footer>
    <div class="container py-5">
        <p class="text-center text-uppercase font-weight-bold small text-justify">
          <a href="{{route('site.about')}}" class="text-dark p-2">{{__('site.about')}}</a>
          <a href="{{route('site.help')}}" class="text-dark p-2">{{__('site.help')}}</a>
          <a href="{{route('site.terms')}}" class="text-dark p-2">{{__('site.terms')}}</a>
          <a href="{{route('site.privacy')}}" class="text-dark p-2">{{__('site.privacy')}}</a>
          <a href="{{route('site.language')}}" class="text-dark p-2">{{__('site.language')}}</a>
        </p>
        <p class="text-center text-muted small mb-0">
          <span class="text-muted">© {{date('Y')}}</span>
          <span class="mx-2">·</span>
          <a href="https://pixey.org" class="text-muted font-weight-bold" rel="noopener">Pixey.org</a>
          <span class="mx-2">·</span>
          <span class="text-muted"><a href="https://pixelfed.org" class="text-muted font-weight-bold" rel="noopener">Pixelfed  v{{config('pixelfed.version')}}</a></span>
        </p>
    </div>
  </footer>
  @endif
