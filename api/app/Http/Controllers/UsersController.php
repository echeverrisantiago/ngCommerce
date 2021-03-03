<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function register(Request $req){
        $user = User::create($req->all());

        return json_encode($user);
    }

     public function token()
     {
         $token = auth()->attemt($credentials);
     }

     public function __construct()
     {
         $this->middleware('jwt', ['except' => ['login','register']]);
     }

     /**
      * Get a JWT via given credentials.
      *
      * @return \Illuminate\Http\JsonResponse
      */
     public function login()
     {
         $credentials = request(['email', 'password']);

         if (! $token = auth()->attempt($credentials)) {
             return response()->json(['error' => 'Unauthorized'], 401);
         }

         return $this->respondWithToken($token);
     }

     /**
      * Log the user out (Invalidate the token).
      *
      * @return \Illuminate\Http\JsonResponse
      */
     public function logout()
     {
         auth()->logout();

         return response()->json(['message' => 'Successfully logged out']);
     }

     /**
      * Get the token array structure.
      *
      * @param  string $token
      *
      * @return \Illuminate\Http\JsonResponse
      */
     protected function respondWithToken($token)
     {
         return response()->json([
             'access_token' => $token,
             'token_type' => 'bearer',
             'expires_in' => 3600
         ]);
     }

     public function verify(){
         return true;
     }
}