<?php

namespace App\Http\Controllers\API;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderMail;
use Mockery\Exception;

class OrderController extends Controller
{
    public function index(Request $request) {

    }

    public function show(Request $request) {

    }

    public function store(Request $request) {
        try {
            if ($this->checkOrder()) {
                return response()->json(['answer' => 'Такой заказ уже есть'], '422');
            } else {
                $user_session = session()->getId();
                $user_id = Auth::id();
                $order = new Order();
                $order->fill($request->all());
                $order->session_id = $user_session;
                $order->user_id = $user_id;
                $order->save();
                Mail::to('konstantin.sudakov@bk.ru')->send(new OrderMail());
                Mail::to('k.kamil87-87@yandex.ru')->send(new OrderMail());
                session()->regenerate();
                return response()->json(['order' => $order], '201');
            }
        }catch (Exception $exception) {
            return response()->json(['answer' => 'error'], '500');
        }
    }

    private function checkOrder() {
        $value = Order::query()->where('session_id', '=', session()->getId())->first();
        if ($value) {
            return true;
        } else return false;
    }
}
