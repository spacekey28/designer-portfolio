<header class="container nav-container fixed-top">
  <a class="brand" href="{{ home_url('/') }}"><span class="brand-content">{{ get_bloginfo('name', 'display') }}</span></a>
  <nav class="nav-primary">
    <button type="button" class="hamburger-btn">
      <div class="hamburger-icon"><span></span><span></span><span></span><span></span></div>
    </button>
    <div class="menu-modal">
      <div class="menu-modal__container">

        {{-- <ul>
                  <li class="current-item"><a href="/work/">Work</a></li>
                  <li><a href="/about/">About Me</a></li>
                  <li><a href="/contact/">Contact</a></li>
              </ul> --}}
        @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
        @endif
      </div>
    </div>
  </nav>
</header>