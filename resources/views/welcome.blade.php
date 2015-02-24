@extends('base')

@section('body')
<div class="col-md-3"></div>
<div class="col-md-3">
    @include('form.signin')
</div>
<div class="col-md-3">
    @include('form.signup')
</div>
<div class="col-md-3"></div>

@stop
