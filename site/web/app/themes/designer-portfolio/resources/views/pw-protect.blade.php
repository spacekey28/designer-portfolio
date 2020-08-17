@extends('layouts.app')

@section('content')
@if (!have_posts())
<div class="page-center">
    <header class="page-center-header">
        <div class="container">
            <div class="page-center-header__content">
                <h1>This project is password protected</h1>
                <p><a href="mailto:hello@example.test">Email</a> me for password.</p>
                <input class="pw-field" type="password" placeholder="Input password">
                @include('partials.page-header')
            </div>
        </div>
    </header>
</div>
@endif
@endsection