<?php

namespace Modules\Admin\Settings\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => "unique:users,email,$this->id,id",
            'password'=> 'nullable',
            'roles' => 'required',
            'phone_number' => 'required',
            'status' => 'required',
            'department_id' => 'required'
        ];
    }
}