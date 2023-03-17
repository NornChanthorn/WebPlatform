<?php

namespace Modules\Admin\Settings\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    use HasFactory;
    // protected $table = "smtps";
    // protected $guarded = ["id"];
    // protected $primary_key = ["id"];
    protected $fillable = [
        'smtp_transport', 
        'smtp_host', 
        'smtp_port', 
        'smtp_encryption', 
        'smtp_user', 
        'smtp_password', 
        'smtp_from', 
        'school_name', 
        'subject', 
        'message', 
        'congrats_from_email', 
        'congrats_subject',
        'congrats_school_name',
        'congrats_message',
        'reject_subject',
        'reject_message'
    ];
}
