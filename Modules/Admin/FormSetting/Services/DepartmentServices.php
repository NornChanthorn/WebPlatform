<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\Department\DepartmentInterface;

class DepartmentServices
{
   protected $department;
   public function __construct(DepartmentInterface $department){
       $this->department = $department;
   }

   public function getAllDepartments()
   {
       $departments = $this->department->all();
       return $departments;
   }

   public function addNewDepartment(array $data)
   {
       $department = $this->department->store($data);
       return $department;
   }

   public function showDepartmentById($id)
   {
       $department = $this->department->get($id);
       return $department;
   }

   public function updateDepartmentById($id,array $data)
   {
       $department = $this->department->update($id,$data);
       return $department;
   }

   public function destroyDepartmentById($id)
   {
       $this->department->delete($id);  
       return response()->noContent();
   }
}
