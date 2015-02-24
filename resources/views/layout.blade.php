@extends('base')

@section('body')
<div class="row">
  <div class="col-md-2">@yield('accordion')</div>
  <div class="col-md-8 form debug-focus">@yield('form')</div>
  <div class="col-md-2">@yield('right')</div>
</div>
@stop
