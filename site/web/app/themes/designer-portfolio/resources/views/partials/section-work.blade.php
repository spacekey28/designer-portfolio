<section class="work">
    <div class="container entry__container">
        @php $query = new wp_query(array('post_type' => 'design_work'));
            if ($query->have_posts()) : @endphp
                @php while ($query->have_posts()) : $query->the_post(); @endphp
                    <div class="entry-work row">
                        <div class="feature-img col-feature-img">
                            @php if( has_post_thumbnail() ) : @endphp
                                <a href="@php the_permalink(); @endphp">
                                    @php the_post_thumbnail('large') @endphp
                                </a>
                            @php endif; @endphp
                        </div>
                        <div class="excerpt col-excerpt">
                            <a href="@php the_permalink(); @endphp">
                                <h2>@php the_title(); @endphp</h2>
                                <p>@php the_content(); @endphp</p>
                            </a>
                        </div>
                    </div>
                @php endwhile;
                    wp_reset_postdata(); @endphp
            @php else : @endphp
                <h2>No post is found.</h2>
            @php endif; @endphp
        <button type="button" class="loadmore">Load More</button>
    </div>
</section>