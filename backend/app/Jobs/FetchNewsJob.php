<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Services\NewsApiService;
use App\Models\Article;
use App\Models\Category;
use App\Models\Source;
use Alirezasedghi\LaravelImageFaker\ImageFaker;
use Alirezasedghi\LaravelImageFaker\Services\FakePeople;

use Illuminate\Support\Facades\Log;

class FetchNewsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $newsApiService = app()->make(NewsApiService::class);;

        $categories = $newsApiService->getNewsCategories();
        foreach ($categories as $category) {
            $existingCategory = Category::where('name', $category)->first();
            if (!$existingCategory) {
                Category::create([
                    'name' => $category,
                ]);
            }
        }

        $sources = $newsApiService->getNewsSources();
        foreach ($sources as $sourceItem) {
            $source = new Source();
            $source->slug = isset($sourceItem->id) ? $sourceItem->id : null;
            $source->name = $sourceItem->name;
            $source->description = isset($sourceItem->description) ? $sourceItem->description : null;
            $source->url = isset($sourceItem->url) ? $sourceItem->url : null;
            $source->category = isset($sourceItem->category) ? $sourceItem->category : null;
            $source->language = isset($sourceItem->language) ? $sourceItem->language : null;
            $source->country = isset($sourceItem->country) ? $sourceItem->country : null;

            $existingSource = Source::where('name', $source->name)->first();
            if (!$existingSource) {
                $source->save();
            }
        }

        $sources = Source::all();
        $today = date('Y-m-d');
        $sourcesQueryArray = array();
        foreach ($sources as $source) {
            $sourcesQueryArray[] = $source->slug;
        }
        $sourcesQuery = implode(',', $sourcesQueryArray);
        $articles = $newsApiService->getNewsArticles(
            $sources = $sourcesQuery,
            $from = "2023-12-01",
            $to = "2023-12-05"
        );
        foreach ($articles as $article) {
            $newArticle = new Article();
            $source = Source::where('name', $article->source->name)->first();
            if (!$source) {
                continue;
            }

            $newArticle->source_id = $source->id;
            $newArticle->author = isset($article->author) ? $article->author : null;
            $newArticle->author_img = (new ImageFaker(new FakePeople()))->imageUrl();
            $newArticle->title = $article->title;
            $newArticle->description = isset($article->description) ? $article->description : null;
            $newArticle->url = isset($article->url) ? $article->url : null;
            $newArticle->urlToImage = isset($article->urlToImage) ? $article->urlToImage : null;
            $newArticle->publishedAt = isset($article->publishedAt) ? $article->publishedAt : null;
            $newArticle->content = isset($article->content) ? $article->content : null;
            $randomCategory = Category::inRandomOrder()->first();
            $newArticle->category_id = $randomCategory->id;

            $newArticle->save();
        }
    }
}
