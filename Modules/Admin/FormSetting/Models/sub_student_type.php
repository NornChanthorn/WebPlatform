<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sub_student_type extends Model
{
    use HasFactory;
    protected $fillable = ['type_name', 'student_type_id'];
}
