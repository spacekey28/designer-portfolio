@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.page-hero')
    
    @include('partials.content-page')
    @include('partials.section-work')
  @endwhile
@endsection
