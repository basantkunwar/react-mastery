<?php

use App\Http\Controllers\NoticeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/', function () {
    return Inertia::render('Home');  
});

Route::get('/About', function () {
    return Inertia::render('About');
});
route::get('/notice/create', [NoticeController::class, 'create'])->name('notice.create');
Route::post('/notice', [NoticeController::class, 'store'])->name('notice.store');
Route::get('/profile', [ProfileController::class, 'profile'])->name('profile');
route::get('/portfolio',function ()
 {return Inertia::render('portfolio');})->name('portfolio');
 
Route::get('/Products', function () {
    return Inertia::render('Products');
})->name('Products');
require __DIR__.'/auth.php';
