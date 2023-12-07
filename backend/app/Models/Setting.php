<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'sources',
        'categories',
    ];

    public function user()
    {
        return $this->belongsTo(Setting::class);
    }
}
