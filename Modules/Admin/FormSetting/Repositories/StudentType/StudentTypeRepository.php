<?php
namespace Modules\Admin\FormSetting\Repositories\StudentType;
use Modules\Admin\FormSetting\Repositories\StudentType\StudentTypeInterface;
use Illuminate\Support\Facades\Hash;
use Modules\Admin\FormSetting\Models\student_type;
use Log;
class StudentTypeRepository implements StudentTypeInterface
{
    protected $student_type;
    public function getAll(){
        return student_type::all();
    }
    public function getById($id){
        return student_type::find($id);
    }
    public function create(array $collection){     
        return student_type::create($collection);
    }
    public function update($id, array $collection){
        return student_type::whereId($id)->update($collection);
    }
    public function delete($id){
        return student_type::find($id)->delete();
    }
}