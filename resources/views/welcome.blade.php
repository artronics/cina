@extends('base')

@section('body')
<div class="col-md-3"></div>
<div class="col-md-3">
{{--    @include('auth.login')--}}
</div>
<div class="col-md-3">
    @include('auth.register')
</div>
<div class="col-md-3"></div>

@stop
