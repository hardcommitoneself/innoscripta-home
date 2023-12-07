<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Http\Resources\SettingResource;
use Illuminate\Http\Request;

use App\Models\Setting;

class GetSettingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $user = $request->user();

        $setting = Setting::where('user_id', $user->id)->first();

        if (!$setting) {
            return response()->json(['settings' => new SettingResource(null), 'status' => 200]);
        }

        return response()->json(['settings' => new SettingResource($setting), 'status' => 200]);
    }
}