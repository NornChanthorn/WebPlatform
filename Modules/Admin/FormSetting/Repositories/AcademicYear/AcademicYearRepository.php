<?php
namespace Modules\Admin\FormSetting\Repositories\AcademicYear;
use Modules\Admin\FormSetting\Repositories\AcademicYear\AcademicYearInterface;
use Illuminate\Support\Facades\Hash;
use Modules\Admin\FormSetting\Models\academic_year;
use Log;
class AcademicYearRepository implements AcademicYearInterface
{
    protected $academic_year;
    public function getAll(){
        return academic_year::all();
    }
    public function getById($id){
        return academic_year::find($id);
    }
    public function create(array $collection){     
        return academic_year::create($collection);
    }
    public function update($id, array $collection){
        return academic_year::whereId($id)->update($collection);
    }

    public function delete($id){
        return academic_year::find($id)->delete();
    }
}