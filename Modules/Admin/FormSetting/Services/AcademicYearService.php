<?php
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\AcademicYear\AcademicYearInterface;

class AcademicYearService
{
    
   protected $a_year;
   public function __construct(AcademicYearInterface $a_year){
       $this->a_year = $a_year;
   }
   public function getData()
   {
       $data = $this->a_year->getAll();
       return $data;
   }
   public function create(array $collection)
   {
       $data = $this->a_year->create($collection);
       return $data;
   }
   public function getById($id)
   {
       $data = $this->a_year->getById($id);
       return $data;
   }
   public function update($id,array $collection)
   {
       $data = $this->a_year->update($id,$collection);
       return $data;
   }
   public function destroy($id)
   {
       $this->a_year->delete($id);  
       return response()->noContent();
   }
}
