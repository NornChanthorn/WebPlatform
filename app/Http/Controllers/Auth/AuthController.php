<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use App\Rules\MatchOldPassword;
use Log;
use PDF;


class AuthController extends Controller
{
  //register
  public function login(Request $request)
  {
     $credentials = $request->validate([
       'email' => 'required|email',
       'password' => 'required|min:2|max:6',
     ]);   
     if (Auth::attempt($credentials) && Auth::user()->status== "Active") {
       $success = true;
       $message = 'User login successfully';
       $user = User::where('email', $request->email)->first();
       $token= $user->createToken("API TOKEN")->plainTextToken;
     } 
     else if(Auth::attempt($credentials) && Auth::user()->status== "Inactive"){
       $success = false;
       $message = 'User is InActive';
     }
     else {
       $success = false;
       $message = 'Unauthorised';
     }
     $response = [
       'success' => $success,
       'message' => $message,
       'roles' => Auth::user()->roles,
     ];
     return response()->json($response);
   }

   public function register(Request $request)
   {   
      $data= $request->validate( [
       'name' => 'required|string|max:255',
       'kh_name' => 'required|string|max:255',
       'email' => 'required|string|email|max:255|unique:users',
       'phone_number' => 'required|min:9|max:12',
       'dob'=> 'required',
       'gender' => 'required',
       'password' => 'required|confirmed|string|max:6',
       'course_name' => 'required',
       'role_ids' => '1'
      ]);
      $user = User::create($data);
      $token= $user->createToken("API TOKEN")->plainTextToken;   
      return response()->json([
       'message' => 'create success',
       'token' => $token,
       'user' => $user
      ]);
    }
 //logout
  public function logout()
  {
    try {
      Session::flush();
      $success = true;
      $message = 'Successfully logged out';
    } catch (\Illuminate\Database\QueryException $ex) {
      $success = false;
      $message = $ex->getMessage();
    }
    $response = [
      'success' => $success,
      'message' => $message,
    ];
    return response()->json($response);
  }

//update user infor
  public function update(Request $request)
  {
    $request->validate([
      'name' => 'required|min:4|string|max:255',
      'email' => 'required|email|string|max:255'
    ]);
    $user = Auth::user();
    $user->name = $request['name'];
    $user->email = $request['email'];
    $user->save();
    Log::debug('update function');
    return response()->json([
      'data updated' => $user->name
    ]);
    Log::debug("here is update");
  }

 //change password
  public function changePass(Request $request)
  { 
        $request->validate([
          'current_password' => ['required', new MatchOldPassword],
          'new_password' => ['required'],
          'new_confirm_password' => ['same:new_password'],
        ]);
        User::find(auth()->user()->id)->update(['password'=> Hash::make($request->new_password)]);
        return response()->json("password changed successfully");

        dd('Password change successfully.');
  }

  //getUser
  public function getUser(){
    $data= auth()->user();
    $name= auth()->user()->name;
    return response()->json($data);
  }

  public function PrintInfo(){
      // $data = User::all();
      // // share data to view
      // // view()->share('employee',$data);
      // $pdf = PDF::loadView('pdf_view', $data);
      // // download PDF file with download method
      // return $pdf->download('pdf_file.pdf');
    
        $file = public_path() . "/path/test.pdf";

        $headers = [
            'Content-Type' => 'application/pdf',
        ];
        return response()->download($file, 'test.pdf', $headers);
    
  }

}
