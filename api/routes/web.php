<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProvidersController;
use App\Http\Controllers\OrdersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('users/register', [UsersController::class, 'register']);
Route::post('users/login', [UsersController::class, 'login']);
Route::post('token', [UsersController::class, 'token']);

Route::group(['middleware' => ['jwt']], function () {
    Route::get('', [UsersController::class, 'verify']);

    /* PRODUCTS */
    Route::get('products', [ProductsController::class, 'index']);
    Route::get('product/{id}', [ProductsController::class, 'getProduct']);
    Route::post('products/create', [ProductsController::class, 'store']);
    Route::post('productsUpdate/', [ProductsController::class, 'update']);
    Route::delete('product/{id}', [ProductsController::class, 'delete']);


/* PROVIDERS */

Route::get('providers', [ProvidersController::class, 'index']);
Route::get('provider/{id}', [ProvidersController::class, 'getProduct']);
Route::post('providers/create', [ProvidersController::class, 'store']);
Route::post('providersUpdate/', [ProvidersController::class, 'update']);
Route::delete('provider/{id}', [ProvidersController::class, 'delete']);

/* ORDERS */

Route::get('orders', [OrdersController::class, 'index']);
Route::get('order/{id}', [OrdersController::class, 'getProduct']);
Route::post('orders/create', [OrdersController::class, 'store']);
Route::delete('order/{id}', [OrdersController::class, 'delete']);


});