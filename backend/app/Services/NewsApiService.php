<?php

namespace App\Services;

use jcobhams\NewsApi\NewsApi;

class NewsApiService
{
    protected $newsApi;

    public function __construct(NewsApi $newsApi)
    {
        $this->newsApi = $newsApi;
    }

    public function getNewsArticles($q, $sources, $from, $to, $page_size, $page)
    {
        return $this->newsApi->getEverything(
            $q,
            $sources,
            $domains = null,
            $exclude_domains = null,
            $from,
            $to,
            $language = null,
            $sort_by = 'publishedAt',
            $page_size,
            $page
        );
    }

    public function getNewsCategories()
    {
        return $this->newsApi->getCategories();
    }

    public function getNewsSources($category)
    {
        return $this->newsApi->getSources(
            $category,
            $language = 'en',
            $country = null
        );
    }
}
