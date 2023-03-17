<?php

namespace Modules\Admin\FormSetting\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStepRequest extends FormRequest
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
            'custom_fields_id' => ['required'],
            'name' => ['required', 'string'],
            'index' => ['required', 'integer'],
            'column' => ['required', 'integer'],
        ];
    }
}
