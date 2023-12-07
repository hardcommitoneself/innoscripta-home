<?php

namespace App\Http\Controllers\News;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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
