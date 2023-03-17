<?php

namespace App\Rules;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Validation\Rule;

class MatchOldPassword implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    } 
    public function passes($attribute, $value)
    {     
        return Hash::check($value, auth()->user()->password);
    }
    public function message()
    {
        return 'Current password not match.';
    }
}
