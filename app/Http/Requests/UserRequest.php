<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $userId = Auth::id();
        $requestId = $this->request->all()['id'];
        if ($userId === $requestId) {
            return true;
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $user = Auth::user();
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'phone' => ['nullable', 'digits_between:4,20', Rule::unique('users')->ignore($user->id)],
            'location' => ['nullable', 'min:4', 'max:300'],
            'address' => ['nullable', 'min:4', 'max:500'],
        ];
    }

    public function attributes() {
        return [
            'location' => 'Населенный пункт',
            'address' => 'Адрес доставки',
        ];
    }

    public static function rulesForUpdatePasswordInProfile() {
        return [
            'oldPassword' => ['required', 'string', 'min:8'],
            'newPassword' => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }

    public static function attributesNameForPasswordInProfile() {
        return [
            'oldPassword' => 'Текущий пароль',
            'newPassword' => 'Новый пароль',
            'newPassword_confirmation' => 'Повторите новый пароль',
        ];
    }
}
