<?php
namespace Modules\Admin\FormSetting\Repositories\Institute;
use Modules\Admin\FormSetting\Repositories\Institute\InstituteInterface;
use Illuminate\Support\Facades\Hash;
use Modules\Admin\FormSetting\Models\Institute;
use Log;
class InstituteRepository implements InstituteInterface
{
    protected $Institute;
    public function getAll(){
        return Institute::all();
    }
    public function getById($id){
        return Institute::find($id);
    }
    public function create(array $collection){     
        return Institute::create($collection);
    }
    public function update($id, array $collection){
        return Institute::whereId($id)->update($collection);
    }

    public function delete($id){
        return Institute::find($id)->delete();
    }
}