<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'phone', 'location', 'address'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Правила валидация для сены пароля в личном кабинете юзера
     *
     */
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
