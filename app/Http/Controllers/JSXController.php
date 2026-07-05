<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JSXController extends Controller
{
    //
    public function Greeting(){
        return Inertia::render('01jsx/Greeting');
    }
}
