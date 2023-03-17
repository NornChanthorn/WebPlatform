<?php
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\StudentType\StudentTypeInterface;

class StudentTypeService
{
   protected $student_type;
   public function __construct(StudentTypeInterface $student_type){
       $this->student_type = $student_type;
   }

   public function getData()
   {
       $data = $this->student_type->getAll();
       return $data;
   }

   public function create(array $collection)
   {
       $data = $this->student_type->create($collection);
       return $data;
   }

   public function getById($id)
   {
       $data = $this->student_type->getById($id);
       return $data;
   }

   public function update($id,array $collection)
   {
       $data = $this->student_type->update($id,$collection);
       return $data;
   }

   public function destroy($id)
   {
       $this->student_type->delete($id);  
       return response()->noContent();
   }
}
