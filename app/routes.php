<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::resource('cart','CartController');
Route::resource('category','CategoryController');

Route::controller('products', 'ProductController');

Route::get('/', function()
{
	return View::make('home');
});