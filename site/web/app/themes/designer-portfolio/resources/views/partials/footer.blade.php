<footer class="content-info">
  <div class="container">
      <div class="row">
          <div class="col">
              <div class="footer-nav">
                @if (has_nav_menu('footer_navigation'))
                    {!! wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => 'footer-nav')); !!}
                @endif
                  {{-- <a href="work/" target="_self">Work</a>
                  <a href="about/" target="_self">About Me</a>
                  <a href="contact/" target="_self">Contact</a>
                  <a href="resume/" target="_blank">Résumé</a>
                  <a href="blog/" target="_self">Blog</a> --}}
              </div>
          </div>
      </div>
  </div>
</footer>