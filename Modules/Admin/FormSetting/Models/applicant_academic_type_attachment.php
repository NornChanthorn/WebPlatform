<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class applicant_academic_type_attachment extends Model
{
    use HasFactory;
    protected $fillable = ['file_id','applicant_academic_type_id','is_profile_printout','file_name','is_required'];
}
