@extends('base')

@section('body')
<h1>kir</h1>
<div ui-view></div>
    <!-- We'll also add some navigation: -->
    <a ui-sref="state1">State 1</a>
    <a ui-sref="state2">State 2</a>
@stop