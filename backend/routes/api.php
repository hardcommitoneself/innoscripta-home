<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\CurrentUserController;
use App\Http\Controllers\NewsArticleController;
use App\Http\Controllers\NewsCategoryController;
use App\Http\Controllers\NewsSourceController;
use App\Http\Controllers\Setting\GetSettingController;
use App\Http\Controllers\Setting\UpdateSettingController;

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

Route::post('login', LoginController::class);
Route::post('register', RegisterController::class);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', LogoutController::class);
    Route::get('user', CurrentUserController::class);
    Route::prefix('news')->group(function () {
        Route::get('/categories', NewsCategoryController::class);
        Route::get('/sources', NewsSourceController::class);
        Route::post('/articles', NewsArticleController::class);
    });
    Route::prefix('setting')->group(function () {
        Route::get('/', GetSettingController::class);
        Route::post('/', UpdateSettingController::class);
    });
});
