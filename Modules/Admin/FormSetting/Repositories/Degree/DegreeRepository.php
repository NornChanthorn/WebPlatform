<?php
namespace Modules\Admin\FormSetting\Repositories\Degree;
use Modules\Admin\FormSetting\Repositories\Degree\DegreeInterface;
use Illuminate\Support\Facades\Hash;
use Modules\Admin\FormSetting\Models\Degree;
use Log;
class DegreeRepository implements DegreeInterface
{
    protected $Degree;
    public function getAll(){
        return Degree::all();
    }
    public function getById($id){
        return Degree::find($id);
    }
    public function create(array $collection){     
        return Degree::create($collection);
    }
    public function update($id, array $collection){
        return Degree::whereId($id)->update($collection);
    }

    public function delete($id){
        return Degree::find($id)->delete();
    }
}