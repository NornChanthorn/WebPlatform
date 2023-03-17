<?php

namespace Modules\Admin\FormSetting\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAATRequest extends FormRequest
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
            'student_type_id' => 'required',
            'sub_student_type_id' => 'required',
            'applicant_type_id'  => 'required',
            'display_name'  => 'required',
            'is_active'  => 'required',
            'is_default_option'  => 'nullable',
            'option_order'  => 'required',
            'is_selectable'  => 'required',
            'is_expired'  => 'nullable',
            'department_id'  => 'nullable',
            'section_id'  => 'nullable',
            'academic_year_id' => 'nullable',
            'dt_registration_deadline'  => 'nullable',
            'file1'  => 'nullable',
            'file2'  => 'nullable',
            'file3'  => 'nullable',
            'file4'  => 'nullable',
            'file5'  => 'nullable',
            'file6'  => 'nullable',
            'file7'  => 'nullable',
            'file8'  => 'nullable',
            'note'   => 'nullable',
            'approved_email_template'  => 'nullable',
            'is_file1_required'  => 'nullable',
            'is_file2_required'  => 'nullable',
            'is_file3_required'  => 'nullable',
            'is_file4_required'  => 'nullable',
            'is_file5_required'  => 'nullable',
            'is_file6_required'  => 'nullable',
            'is_file7_required'  => 'nullable',
            'is_file8_required'  => 'nullable',
            'nu_max_registration_count'  => 'nullable',
            'is_allow_applicant_print_fact_sheet'  => 'required',
            'is_show_photo_in_fact_sheet'  => 'required',
            'registration_type'  => 'nullable',
        ];
    }
}
