<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Validator;

class UserController extends Controller
{
//    public function token(Request $request) {
//        $user = User::where('email', $request->email)->first();
//        $token = $user->tokens()->delete();
//        return response()->json(['token' => $user->createToken($request->email)->plainTextToken]);
//    }

    public function update(UserRequest $request) {
        $request->validated();
        $user = Auth::user();
        $user->fill($request->all());
        if ($request->newPassword) {
            $request->validate(UserRequest::rulesForUpdatePasswordInProfile(), [], UserRequest::attributesNameForPasswordInProfile());
            if (Hash::check($request->oldPassword , Auth::user()->getAuthPassword())) {
                $password = Hash::make($request->newPassword);
                $user->password = $password;
            } else {
                return response()->json(['errors' => ['oldPassword' => ['Неверный пароль']]], '422');
            }
        }
        $user->update();
        return response()->json(['answer' => 'success'], '204');
    }
}
