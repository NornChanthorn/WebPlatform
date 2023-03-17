<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class applicant_type extends Model
{
    use HasFactory;
    protected $fillable = ['type_name'];
}
