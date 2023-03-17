<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Institute extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'name_kh',
        'abbrev',
        'description'
    ];
}
