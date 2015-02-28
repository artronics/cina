<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Cina test</title>

    {{--Styles--}}
    @if (getenv('APP_ENV') == 'local')
        <link href="{{elixir('css/screen.min.css')}}" rel="stylesheet">
        <link href="/css/bootstrap.min.css" rel="stylesheet">
        <link href="/css/font-awesome.min.css" rel="stylesheet">
    @elseif(getenv('APP_ENV') == 'production')
        <link href="{{elixir('css/screen.min.css')}}" rel="stylesheet">
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    @endif
</head>
<body ng-controller="MainCtrl as ctrl">

    <div class="navbar">
        <div class="navbar-inner">
          <a class="brand" href="#">Quick Start</a>
          <ul class="nav">
            <li><a ui-sref="root.route1">Route 1</a></li>
            <li><a ui-sref="root.route2">Route 2</a></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="span12">
          <div class="well" ui-view></div>
        </div>
      </div>



    @if (getenv('APP_ENV') == 'local')
        <script src="/js/angular.min.js"></script>
        <script src="/js/angular-ui-router.min.js"></script>
        <script src="/js/ui-bootstrap.min.js"></script>
        <script src="/js/ui-bootstrap-tpls.min.js"></script>
        {{--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap.min.js"></script>--}}
        {{--<script src="/js/cina.js"></script>--}}
        <script src="/js/test.js"></script>
    @elseif(getenv('APP_ENV') == 'production')
        <script src="js/app.min.js"></script>
    @endif
</body>
</html>