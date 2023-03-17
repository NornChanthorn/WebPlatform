<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class applicant_academic_types extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_type_id',
        'sub_student_type_id',
        'applicant_type_id',
        'display_name',
        'is_active',
        'is_default_option',
        'option_order',
        'is_selectable',
        'is_expired',
        'department_id',
        'section_id',
        'academic_year_id',
        'dt_registration_deadline',
        'file1',
        'file2',
        'file3',
        'file4',
        'file5',
        'file6',
        'file7',
        'file8',
        'note',
        'approved_email_template',
        'is_file1_required',
        'is_file2_required',
        'is_file3_required',
        'is_file4_required',
        'is_file5_required',
        'is_file6_required',
        'is_file7_required',
        'is_file8_required',
        'nu_max_registration_count',
        'is_allow_applicant_print_fact_sheet',
        'is_show_photo_in_fact_sheet',
        'registration_type',
    ];
}
