<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class steps extends Model
{
    use HasFactory;
    protected $fillable = ['custom_fields_id','name', 'index', 'column'];

    public function fields()
    {
        return $this->hasMany(fields::class);
    }

    public function custom_fields()
    {
        return $this->belongsTo(custom_fields::class);
    }
}
