<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Http\Resources\ArticleResource;
use App\Models\Article;

class NewsArticleController extends Controller
{
    public function __invoke(Request $request)
    {
        $cacheKey = 'articles:';
        $minutes = 1440;

        $articles = Article::query()->with('source')->with('category');

        if ($request->has('sources')) {
            $sources = $request->input('sources');
            $articles->whereIn('source_id', $sources);
            $cacheKey .= "sources-" . json_encode($sources);
        }

        if ($request->has('categories')) {
            $categories = $request->input('categories');
            $articles->whereIn('category_id', $categories);
            $cacheKey .= "categories-" . json_encode($categories);
        }

        if ($request->has('q')) {
            $q = $request->input('q');
            $articles->where(function ($query) use ($q) {
                $query->where('description', 'LIKE', '%' . $q . '%')
                    ->orWhere('content', 'LIKE', '%' . $q . '%');
            });
            $cacheKey .= "q-" . $q;
        }

        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }

        $res = $articles->get();
        Cache::put($cacheKey, $res, now()->addMinutes($minutes));

        return response()->json(['articles' => new ArticleResource($res), 'status' => 200]);
    }
}
