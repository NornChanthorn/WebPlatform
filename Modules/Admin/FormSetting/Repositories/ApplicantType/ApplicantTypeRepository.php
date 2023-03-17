<?php
namespace Modules\Admin\FormSetting\Repositories\ApplicantType;
use Modules\Admin\FormSetting\Repositories\ApplicantType\ApplicantTypeInterface;
use Illuminate\Support\Facades\Hash;
use Modules\Admin\FormSetting\Models\applicant_type;
use Log;
class ApplicantTypeRepository implements ApplicantTypeInterface
{
    protected $applicant_type;
    public function getAll(){
        return applicant_type::all();
    }
    public function getById($id){
        return applicant_type::find($id);
    }
    public function create(array $collection){     
        return applicant_type::create($collection);
    }
    public function update($id, array $collection){
        return applicant_type::whereId($id)->update($collection);
    }

    public function delete($id){
        return applicant_type::find($id)->delete();
    }
}