<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;

class OrdersController extends Controller
{
    public function index(){
        $orders = Orders::all();

        return json_encode($orders);
    }

    public function store(Request $req){
        $orders = Orders::create($req->all());

        return json_encode($orders);
    }

    public function delete(Request $req){
        $orders = Orders::whereId($req->id)->delete();

        return json_encode($orders);
    }

    public static function getOrder(Request $req){
        $order = Orders::whereId($req->id)->first();

        return json_encode($order);
    }
}
