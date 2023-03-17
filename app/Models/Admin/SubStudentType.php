<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubStudentType extends Model
{
    use HasFactory;
    protected $fillable=[
        'student_type_id',
        'type_name'
    ];
}
