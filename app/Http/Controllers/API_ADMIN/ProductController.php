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
            return response()->json(['answer' => 'error'], 422);
        } else {
            try {
                $path = $request->file('products')->store('storage');
                $import = new ProductsImport();
                $import->import($path);

                dd('wewe');
//                return redirect()->back()->with('success', $msg);
            } catch (\Exception $exception) {
                dd($exception);
                return redirect()->back()->with('error', 'Сбой базы данных. Попробуйте еще раз');
            }
        }
    }
}
