<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Basket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mockery\Exception;

class BasketController extends Controller
{
    public function show(Request $request) {
        dd($request);
    }

    public function store(Request $request) {
        try {
            $cart = $request->all();
            $user_session = session()->getId();
            $user_id = Auth::id();
            foreach ($cart as $value) {
                $checkBasket = $this->checkBasket($value);
                if ($checkBasket) {
                    $checkBasket->fill($value);
                    $checkBasket->total = $value['totalPriceProduct'];
                    $checkBasket->user_id = $user_id;
                    $checkBasket->update();
                } else {
                    $basket = new Basket();
                    $basket->fill($value);
                    $basket->product_id = $value['id'];
                    $basket->session_id = $user_session;
                    $basket->user_id = $user_id;
                    $basket->total = $value['totalPriceProduct'];
                    $basket->save();
                }
            }
            return response()->json(['answer' => 'success'], '204');
        }catch (Exception $exception) {
            return response()->json(['answer' => 'error'], '500');
        }
    }

    private function checkBasket(array $basket) {
        $value = Basket::query()->where('session_id', '=', session()->getId())
            ->where('product_id', '=', $basket['id'])->first();
        if ($value) {
            return $value;
        } else return false;
    }
}
