<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NoticeController extends Controller
{
    //
    public function create(){
       
    return Inertia::render('notice/create');
}

public function store(Request $request){
    
}
    }
    

