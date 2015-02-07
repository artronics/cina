<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Laravel</title>

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
<body>


	@yield('body')

	<!-- Scripts -->
	{{--<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>--}}
	{{--<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js"></script>--}}
    @if (getenv('APP_ENV') == 'local')
        <script src="js/angular.min.js"></script>
    @elseif(getenv('APP_ENV') == 'production')

    @endif
</body>
</html>