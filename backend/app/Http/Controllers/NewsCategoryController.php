<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Resources\CategoryResource;

class NewsCategoryController extends Controller
{
    public function __invoke()
    {
        $categories = Category::all();

        return response()->json(['categories' => new CategoryResource($categories), 'status' => 200]);
    }
}
