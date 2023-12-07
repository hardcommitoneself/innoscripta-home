<?php

namespace App\Services;

use jcobhams\NewsApi\NewsApi;

class NewsApiService {
    protected $newsApi;

    public function __construct(NewsApi $newsApi)
    {
        $this->newsApi = $newsApi;
    }

    public function getNewsArticles($sources, $from, $to)
    {
        $response = $this->newsApi->getEverything(
            $q = null,
            $sources,
            $domains = null,
            $exclude_domains = null,
            $from,
            $to,
            $language = null,
            $sort_by = 'publishedAt',
            $page_size = null,
            $page = null
        );
        if ($response->status == 'ok') {
            return $response->articles;
        } else {
            return [];
        }
    }

    public function getNewsCategories() {
        return $this->newsApi->getCategories();
    }

    public function getNewsSources() {
        $response = $this->newsApi->getSources(
            $category=null, $language = 'en', $country = null
        );

        if ($response->status == 'ok') {
            return $response->sources;
        } else {
            return [];
        }
    }
}
