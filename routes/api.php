<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group([
    'namespace' => 'API',
    'prefix' => 'product',
], function () {
    Route::get('/', 'ProductController@index');
});

Route::group([
    'namespace' => 'API',
    'prefix' => 'category',
], function () {
    Route::get('/', 'CategoryController@index');
});

Route::group([
    'namespace' => 'Auth',
    'prefix' => 'user',
], function () {
    Route::get('/token', 'UserController@token');
});

Route::group([
    'namespace' => 'Auth',
    'prefix' => 'user',
    'middleware' => 'auth:sanctum'
], function () {
    Route::put('/', 'UserController@update');
});

//Route::middleware('auth:sanctum')->get('/name', function (Request $request) {
//    return response()->json(['name' => $request->user()->name]);
//});
