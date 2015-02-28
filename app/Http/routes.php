<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', 'WelcomeController@index');
Route::get('/',    ['as' => 'welcome','uses' => 'PagesController@welcome']);
Route::get('app', ['as' => 'cina','uses' => 'PagesController@cina']);
Route::get('test', ['as' => 'test', 'uses' => 'PagesController@test']);

Route::group(['prefix' => 'cina', 'middleware' => 'auth'], function()
    {
        Route::resource('user.contacts', 'ContactController');
    });
Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

