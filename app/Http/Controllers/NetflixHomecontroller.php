<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NetflixHomecontroller extends Controller
{
    //
    public function home(){
        return Inertia::render('06BasicProject/Home');
    }
}
