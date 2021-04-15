<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        try {
            $categories = Category::all();
        }catch (\Exception $exception) {
            return response()->json(['answer' => 'error']);
        }
        return response()->json([
            'answer' => 'success',
            'categories' => $categories
        ]);
    }
}
