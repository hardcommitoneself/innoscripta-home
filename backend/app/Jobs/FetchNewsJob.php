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
            Category::firstOrCreate(
                ['name' => $category],
                [
                    'name' => $category,
                ]
            );
        }

        $sources = $newsApiService->getNewsSources();
        foreach ($sources as $sourceItem) {
            Source::firstOrCreate(
                ['name' => $sourceItem->name],
                [
                    'slug' => isset($sourceItem->id) ? $sourceItem->id : null,
                    'description' => isset($sourceItem->description) ? $sourceItem->description : null,
                    'url' => isset($sourceItem->url) ? $sourceItem->url : null,
                    'category' => isset($sourceItem->category) ? $sourceItem->category : null,
                    'language' => isset($sourceItem->language) ? $sourceItem->language : null,
                    'country' => isset($sourceItem->country) ? $sourceItem->country : null,
                ]
            );
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
            $from = $today,
            $to = $today
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
            $newArticle->url_to_image = isset($article->urlToImage) ? $article->urlToImage : null;
            $newArticle->published_at = isset($article->publishedAt) ? $article->publishedAt : null;
            $newArticle->content = isset($article->content) ? $article->content : null;
            $randomCategory = Category::inRandomOrder()->first();
            $newArticle->category_id = $randomCategory->id;

            $newArticle->save();
        }
    }
}
