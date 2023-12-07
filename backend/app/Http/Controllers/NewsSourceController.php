<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
