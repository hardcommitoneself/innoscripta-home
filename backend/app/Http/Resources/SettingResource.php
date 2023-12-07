<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'sources' => isset($this->sources) ? json_decode($this->sources) : [],
            'categories' => isset($this->categories) ? json_decode($this->categories) : [],
        ];
    }
}
