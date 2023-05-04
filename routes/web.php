<?php

use Illuminate\Support\Facades\Route;

Route::get('/admin{any}', 'FrontendController@admin')->where('any', '.*');
Route::any('/{any}', 'FrontendController@app')->where('any', '^(?!api).*$');
