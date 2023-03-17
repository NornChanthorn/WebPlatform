<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class custom_fields extends Model
{
    use HasFactory;
    protected $fillable = ['name'];
    public function steps()
    {
        return $this->hasMany(steps::class);
    }
}
