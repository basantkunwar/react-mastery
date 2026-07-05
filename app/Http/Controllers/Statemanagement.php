<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Statemanagement extends Controller
{
    //
    public function CounterPage(){
        return Inertia::render('04state/CounterPage');
    }

    public function ThemePage(){
        return Inertia::render('04state/ThemePage');
    }
}
