<?php
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\Degree\DegreeInterface;

class DegreeService
{   
   protected $degree;
   public function __construct(DegreeInterface $degree){
       $this->degree = $degree;
   }
   public function getData()
   {
       $data = $this->degree->getAll();
       return $data;
   }
   public function create(array $collection)
   {
       $data = $this->degree->create($collection);
       return $data;
   }
   public function getById($id)
   {
       $data = $this->degree->getById($id);
       return $data;
   }
   public function update($id,array $collection)
   {
       $data = $this->degree->update($id,$collection);
       return $data;
   }
   public function destroy($id)
   {
       $this->degree->delete($id);  
       return response()->noContent();
   }
}
