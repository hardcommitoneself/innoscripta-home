<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\FetchNewsJob;

class RunJobsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jobs:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run pending jobs';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        dispatch(new FetchNewsJob());

        $this->info('Jobs dispatched successfully!');
    }
}
