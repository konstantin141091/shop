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

    public function indexNews() {
        try {
            $products = Product::query()->where('news', '=', true)->get()->toArray();
        }catch (\Exception $exception) {
            return response()->json(['answer' => 'error']);
        }
        return response()->json([
            'answer' => 'success',
            'products' => $products
        ]);

    }
    public function indexSale() {
        try {
            $products = Product::query()->where('sale', '>', 0)->get()->toArray();
        }catch (\Exception $exception) {
            return response()->json(['answer' => 'error']);
        }
        return response()-> json([
            'answer' => 'success',
            'products' => $products
        ]);

    }
}
