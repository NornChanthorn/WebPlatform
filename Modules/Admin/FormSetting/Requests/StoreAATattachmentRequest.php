<?php

namespace Modules\Admin\FormSetting\Requests;
use Illuminate\Foundation\Http\FormRequest;
class StoreAATattachmentRequest extends FormRequest
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
            'file_id' => 'nullable', 'integer',
            'applicant_academic_type_id' => 'nullable',
            'is_profile_printout' => 'nullable',
            'file_name' => 'required',
            'is_required' => 'nullable'
        ];
    }
}
