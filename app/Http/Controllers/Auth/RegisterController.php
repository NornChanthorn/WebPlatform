<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request){
            $validator= $request->validate( [
            'name' => 'required|string|max:255',
            'kh_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone_number' => 'required|min:9|max:12',
            'dob'=> 'required',
            'gender' => 'required',
            'password' => 'required|confirmed|string|max:6',
           ]);

        if($validator->fails()){
           $message = $validator->errors()->toJson();
           $success= false;
        }

        $user = User::create([
            'name' => $request->json()->get('name'),
            'kh_name' => $request->json()->get('kh_name'),
            'email' => $request->json()->get('email'),
            'gender' => $request->json()->get('gender'),
            'dob' => $request->json()->get('dob'),
            'phone_number' => $request->json()->get('phone_number'),
            'password' => Hash::make($request->json()->get('password')),
        ]);
          $response = [
          'success' => $success,
          'message' => $message,
          'token' => $user->createToken("API TOKEN")->plainTextToken
        ];
        return response()->json($response);
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
    
}
