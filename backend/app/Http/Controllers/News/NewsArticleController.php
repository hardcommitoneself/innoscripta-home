<?php

namespace App\Http\Controllers\News;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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

        if ($request->has('sources') && count($sources = $request->input('sources'))) {
            $articles->whereIn('source_id', $sources);
            $cacheKey .= "sources-" . json_encode($sources);
        }

        if ($request->has('categories') && count($categories = $request->input('categories'))) {
            $articles->whereIn('category_id', $categories);
            $cacheKey .= "categories-" . json_encode($categories);
        }

        if ($request->has('q') && $q = $request->input('q')) {
            $articles->where(function ($query) use ($q) {
                $query->where('description', 'LIKE', '%' . $q . '%')
                    ->orWhere('content', 'LIKE', '%' . $q . '%')
                    ->orWhere('title', 'LIKE', '%' . $q . '%');
            });
            $cacheKey .= "q-" . $q;
        }

        if (Cache::has($cacheKey)) {
            return response()->json(['articles' => Cache::get($cacheKey), 'status' => 200]);
        }

        $res = new ArticleResource($articles->get());
        Cache::put($cacheKey, $res, now()->addMinutes($minutes));

        return response()->json(['articles' => $res, 'status' => 200]);
    }
}
