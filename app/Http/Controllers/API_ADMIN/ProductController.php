<?php

namespace App\Http\Controllers\API_ADMIN;

use App\Http\Controllers\Controller;
use App\Imports\ProductsImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function import(Request $request) {
        if (!$request->hasFile('products')) {
            return response()->json(['answer' => 'error'], '422');
        } else {

            $path = $request->file('products')->store('storage');
            $import = new ProductsImport();
            $import->import($path);
            dd('123');



            try {
                $path = $request->file('products')->store('storage');
                $import = new ProductsImport();
                $import->import($path);

                return response()->json(['answer' => 'success'], '204');
            } catch (\Exception $exception) {
                return response()->json(['answer' => 'error'], '500');
            }
        }
    }
}
