<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Providers;

class ProvidersController extends Controller
{
    public function index(){
        $providers = Providers::all();

        return json_encode($providers);
    }

    public function store(Request $req){
        $providers = Providers::create($req->all());

        return json_encode($providers);
    }

    public function delete(Request $req){
        $providers = Providers::whereId($req->id)->delete();

        return json_encode($providers);
    }

    public static function getProduct(Request $req){
        $provider = Providers::whereId($req->id)->first();

        return json_encode($provider);
    }

    public function update(Request $req){
        $provider = Providers::findOrFail($req->id);
        if($provider){
            $provider->name = $req->name;
            $provider->email = $req->email;
            $provider->nit = $req->nit;
            $provider->phone = $req->phone;
            $provider->save();
        } else {
            $provider = false;
        }

        return json_encode($provider);
    }
}
