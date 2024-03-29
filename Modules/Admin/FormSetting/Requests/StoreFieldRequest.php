<?php

namespace Modules\Admin\FormSetting\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFieldRequest extends FormRequest
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
            'steps_id' => ['required'],
            'fieldType' => ['required', 'string'],
            'label' => ['required', 'string'],
            'dataType' => ['required', 'string'],
            'fieldIndex' => ['required', 'integer'],
            'required' => 'required',
            'placeholder' => 'nullable',
            'fieldColumn' => 'required'
        ];
    }
}
