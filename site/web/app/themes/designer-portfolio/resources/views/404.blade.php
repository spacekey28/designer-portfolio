@extends('layouts.app')

@section('content')
  @if (!have_posts())
    <div class="page-center">
      <header class="page-center-header">
        <div class="container">
            <div class="page-center-header__content">
                @include('partials.page-header')
                <p>Back to <a href="/">Homepage</a>.</p>
            </div>
        </div>
      </header>
    </div>
    {{-- {!! get_search_form(false) !!} --}}
  @endif
@endsection
