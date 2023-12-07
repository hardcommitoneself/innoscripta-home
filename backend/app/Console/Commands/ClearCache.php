<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class ClearCache extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jobs:cache-clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear the cache daily';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Cache::flush();
        $this->info('Cache cleared successfully.');
    }
}
