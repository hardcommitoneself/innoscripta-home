<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Http\Resources\SettingResource;
use Illuminate\Http\Request;

use App\Models\Setting;

class UpdateSettingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $sources = json_encode($request->input('sources'));
        $categories = json_encode($request->input('categories'));
        $user = $request->user();

        $setting = Setting::updateOrCreate(
            ['user_id' => $user->id],
            [
                'sources' => $sources,
                'categories' => $categories
            ]
        );

        return response()->json(['settings' => new SettingResource($setting), 'status' => 200]);
    }
}
