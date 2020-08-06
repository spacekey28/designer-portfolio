<section id="intro" class="intro">
    <div class="container">
        <div class="row">
            <div class="col-intro">
                @php the_content() @endphp
            </div>
        </div>
    </div>
</section>

{!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
