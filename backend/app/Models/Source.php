<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Source extends Model
{
    use HasFactory;

    protected $fillable = [ 'id', 'slug', 'name', 'category', 'description', 'url', 'language', 'country' ];
    protected $casts = ['id' => 'string'];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($source) {
            if (!$source->slug) {
                $source->slug = Str::slug($source->name);
            }
        });
    }

    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
