<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

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
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'phone' => ['nullable', 'digits_between:4,20'],
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
}
