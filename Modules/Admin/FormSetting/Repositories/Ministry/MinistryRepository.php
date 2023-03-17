<?php
namespace Modules\Admin\FormSetting\Repositories\Ministry;
use Modules\Admin\FormSetting\Repositories\Ministry\MinistryInterface;
use Illuminate\Support\Facades\Hash;
use Modules\Admin\FormSetting\Models\Ministry;
use Log;
class MinistryRepository implements MinistryInterface
{
    protected $Ministry;
    public function getAll(){
        return Ministry::all();
    }
    public function getById($id){
        return Ministry::find($id);
    }
    public function create(array $collection){     
        return Ministry::create($collection);
    }
    public function update($id, array $collection){
        return Ministry::whereId($id)->update($collection);
    }

    public function delete($id){
        return Ministry::find($id)->delete();
    }
}