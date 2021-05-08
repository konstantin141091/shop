<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    protected $table = 'basket';
    protected $primaryKey = 'id';
    protected $fillable = [
        'session_id',
        'user_id',
        'product_id',
        'count',
        'price',
        'total',
    ];
}
