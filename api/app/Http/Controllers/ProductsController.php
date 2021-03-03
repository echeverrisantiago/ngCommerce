<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
    public function index(){
        $products = Products::all();

        return json_encode($products);
    }

    public function store(Request $req){
        $products = Products::create($req->all());

        return json_encode($products);
    }

    public function delete(Request $req){
        $products = Products::whereId($req->id)->delete();

        return json_encode($products);
    }

    public static function getProduct(Request $req){
        $product = Products::whereId($req->id)->first();

        return json_encode($product);
    }

    public function update(Request $req){
        $product = Products::findOrFail($req->id);
        if($product){
            $product->name = $req->name;
            $product->stock = $req->stock;
            $product->price = $req->price;
            $product->description = $req->description;
            $product->save();
        } else {
            $product = false;
        }

        return json_encode($product);
    }
}
