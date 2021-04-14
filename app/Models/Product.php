<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'count',
        'sale',
        'news',
        'price',
        'img',
        'description',
        'shelf_life',
    ];

    public static function attributesName() {
        return [
            'name' => "Продукт",
            'count' => "Единица измерения",
            'sale' => "Скидка",
            'news' => "Новинка",
            'price' => "Цена",
            'img' => "Изображение",
            'description' => "Описание и состав",
            'shelf_life' => "Срок и условия хранения",
        ];
    }

    public static function rules()
    {
        return [
            'name' => "required|max:300",
            'count' => "required|max:40",
            'sale' => "digits_between:0,100",
            'news' => "boolean",
            'price' => "required|digits_between:1,10000",
            'img' => "file",
            'description' => "required|max:3000",
            'shelf_life' => "required|max:3000",
        ];
    }
}
