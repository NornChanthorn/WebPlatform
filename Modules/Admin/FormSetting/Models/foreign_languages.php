<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class foreign_languages extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'name_kh'];
}
