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

Route::group([
    'namespace' => 'API',
], function () {
    Route::group([
        'prefix' => 'product',
    ], function () {
        Route::get('/', 'ProductController@index');
    });

    Route::group([
        'prefix' => 'category',
    ], function () {
        Route::get('/', 'CategoryController@index');
    });

    Route::group([
        'prefix' => 'basket',
    ], function () {
        Route::get('/', 'BasketController@show');
        Route::post('/', 'BasketController@store');
    });

    Route::group([
        'prefix' => 'order',
    ], function () {
        Route::post('/', 'OrderController@store');
    });
});

Route::group([
    'namespace' => 'Auth',
    'prefix' => 'user',
    'middleware' => 'auth:sanctum'
], function () {
    Route::put('/', 'UserController@update');
});

Route::group([
    'namespace' => 'API_ADMIN',
    'prefix' => 'admin',
    'middleware' => ['auth:sanctum', 'isAdmin']
], function () {
//    products
    Route::post('/product/import', 'ProductController@import');

//    category
    Route::post('/category', 'CategoryController@store');
});



//Route::group([
//    'namespace' => 'Auth',
//    'prefix' => 'user',
//], function () {
//    Route::get('/token', 'UserController@token');
//});

//Route::middleware('auth:sanctum')->get('/name', function (Request $request) {
//    return response()->json(['name' => $request->user()->name]);
//});
