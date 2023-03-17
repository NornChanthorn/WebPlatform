<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\ResetRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Log;
use App\Mail\ResetPasswordMailable;
use App\Models\PasswordReset;


class ResetPasswordController extends Controller
{
    public function sendToken(Request $request){
        $user= User::where('email', $request->email)->first();
        if(!isset($user->id)){
            return response()->json([
                'This user does not exist'
            ]);
        }
        $token = Str::random(32);

        Mail::to($user)->send(new ResetPasswordMailable($token));
        
        $passwordResets= new PasswordReset();
        $passwordResets->email= $user->email;
        $passwordResets->token= $token;
        $passwordResets->save();
        return response()->json('Email sent ');
        dd("Email is sent successfully.");
    }

    public function validateToken(Request $request){
        $passwordResets= PasswordReset::where('token', $request->token)->first();
        if(!isset($passwordResets->email)){
            return response()->json([
                'error' => 'Invalid token'
            ]);
        }
        $user= User::where('email', $passwordResets->email)->first();
        return response()->json($user, 200);
    }
    public function resetPassword(Request $request){
        $user = User::find($request->id);
        $passwordResets = PasswordReset::where('email', $user->email)->first();
        $passwordResets->delete();

        $user->password= bcrypt($request->password);
        $user->save();
    }




    public function forgot(Request $request)
    {
        $email = $request->input('email');

        if (User::where('email', $email)->doesntExist()) {
            return response([
                'message' => 'The user doesn\'t exists.'
            ], 404);
        }
        
        $token = Str::random(10);
        return response()->json($token);
        Log::debug($token);
        Log::debug('send email');
        try {
            
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token
            ]);
         

            //send email
            //Mails.forgot : maybe it is a route 
            Mail::send('Mails.forgot', ['token' => $token], function(Message $message) use ($email){
                $message->to($email);
                $message->subject('Reset your password');
               
            });

            return response()->json([
                'message' => 'Check your email!'
            ]);
        } catch (\Exception $e) {
            return response([
                'message' => $e->getMessage()
            ], 400);
        }
    }



    public function reset(ResetRequest $request){
        $token = $request->input('token');

        if (!$passwordResets = DB::Table('password_resets')->where('token', $token)->first()) {
            return response([
                'message' => 'Invalid token!'
            ], 400);
        }

        if (!$user = User::where('email', $passwordResets->email)->first()) {
            return response([
                'message' => 'User doesn\'t esist!'
            ], 404);
        }

        $user->password = Hash::make($request->input('password'));

        $user->save();

        return response([
            'message' => 'Success'
        ]);
    }
}
