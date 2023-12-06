<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->integer('source_id');
            $table->string('author')->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('url')->nullable();
            $table->text('urlToImage')->nullable();
            $table->string('publishedAt')->nullable();
            $table->text('content')->nullable();
            $table->string('category')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
