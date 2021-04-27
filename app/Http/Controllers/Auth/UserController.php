<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function token(Request $request) {
        $user = User::where('email', $request->email)->first();
        return response()->json(['token' => $user->createToken($request->email)->plainTextToken]);
    }

    public function edit(Request $request) {
        dd($request);
    }
}
