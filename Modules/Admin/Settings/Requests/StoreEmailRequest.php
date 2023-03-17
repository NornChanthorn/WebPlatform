<?php

namespace Modules\Admin\Settings\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmailRequest extends FormRequest
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
            'smtp_transport' => 'nullable',
            'smtp_host' => 'required',
            'smtp_port' => 'required',
            'smtp_encryption' => 'nullable',
            'smtp_user' => 'required',
            'smtp_password' => 'required',
            'smtp_from' => 'required',
            'school_name' => 'required',
            'subject'=> 'nullable',
            'message' => 'nullable',
            'congrats_from_email' => 'nullable',
            'congrats_subject' => 'nullable',
            'congrats_school_name' => 'nullable',
            'congrats_message' => 'nullable',
            'reject_subject' => 'nullable',
            'reject_message' => 'nullable'
        ];
    }
}
