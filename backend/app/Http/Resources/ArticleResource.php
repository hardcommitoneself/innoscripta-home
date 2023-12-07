<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->map(function ($item) {
                return [
                    'id' => $item->id,
                    'sourceId' => $item->source_id,
                    'author' => $item->author,
                    'authorImg' => $item->author_img,
                    'title' => $item->title,
                    'description' => $item->description,
                    'content' => $item->content,
                    'url' => $item->url,
                    'urlToImage' => $item->url_to_image,
                    'publishedAt' => $item->published_at,
                    'source' => [
                        'id' => $item->source->id,
                        'name' => $item->source->name,
                    ],
                    'category' => [
                        'id' => $item->category->id,
                        'name' => $item->category->name,
                    ]
                ];
            }),
            'meta' => [
                'total' => $this->count()
            ]
        ];
    }
}
