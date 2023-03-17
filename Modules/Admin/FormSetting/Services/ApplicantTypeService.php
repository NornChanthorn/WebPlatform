<?php
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\ApplicantType\ApplicantTypeInterface;

class ApplicantTypeService
{
    
   protected $a_type;
   public function __construct(ApplicantTypeInterface $a_type){
       $this->a_type = $a_type;
   }
   public function getData()
   {
       $data = $this->a_type->getAll();
       return $data;
   }
   public function create(array $collection)
   {
       $data = $this->a_type->create($collection);
       return $data;
   }
   public function getById($id)
   {
       $data = $this->a_type->getById($id);
       return $data;
   }
   public function update($id,array $collection)
   {
       $data = $this->a_type->update($id,$collection);
       return $data;
   }
   public function destroy($id)
   {
       $this->a_type->delete($id);  
       return response()->noContent();
   }
}
