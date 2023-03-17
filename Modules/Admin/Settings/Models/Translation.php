<?php

namespace Modules\Admin\Settings\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    use HasFactory;
    protected $fillable = ['default_phrase', 'en', 'kh', 'status'];
}
