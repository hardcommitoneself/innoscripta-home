<?php

namespace App\Http\Controllers\News;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\SourceResource;
use App\Models\Source;

class NewsSourceController extends Controller
{
    public function __invoke(Request $request)
    {
        $sources = Source::all();

        return response()->json(['sources' => new SourceResource($sources), 'status' => 200]);
    }
}
