<?php

namespace Modules\Admin\FormSetting\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class fields extends Model
{
    use HasFactory;
    protected $fillable = ['steps_id','fieldType', 'label', 'dataType' , 'fieldIndex','required','fieldColumn','placeholder'];

    public function steps()
    {
        return $this->belongsTo(steps::class);
    }
}
