<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SourceResource extends JsonResource
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
                    'slug' => $item->slug,
                    'name' => $item->name,
                    'description' => $item->description,
                    'url' => $item->url,
                    'category' => $item->category,
                    'language' => $item->language,
                    'country' => $item->country,
                ];
            }),
            'meta' => [
                'total' => $this->count()
            ]
        ];
    }
}
