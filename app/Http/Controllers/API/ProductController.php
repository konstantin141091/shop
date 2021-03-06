<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index() {
        try {
            $products = Product::all();
        }catch (\Exception $exception) {
            return response()->json(['answer' => 'error']);
        }
        return response()->json([
            'answer' => 'success',
            'products' => $products
        ]);
    }
}
