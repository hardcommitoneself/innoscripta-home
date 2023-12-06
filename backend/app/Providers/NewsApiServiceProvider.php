<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use jcobhams\NewsApi\NewsApi;

class NewsApiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(NewsApi::class, function ($app) {
            return new NewsApi(config('services.newsapi.api_key'));
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
