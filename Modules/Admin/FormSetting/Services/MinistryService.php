<?php
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\Ministry\MinistryInterface;

class MinistryService
{
   protected $ministry;
   public function __construct(MinistryInterface $ministry){
       $this->ministry = $ministry;
   }

   public function getData()
   {
       $data = $this->ministry->getAll();
       return $data;
   }

   public function create(array $collection)
   {
       $data = $this->ministry->create($collection);
       return $data;
   }

   public function getById($id)
   {
       $data = $this->ministry->getById($id);
       return $data;
   }

   public function update($id,array $collection)
   {
       $data = $this->ministry->update($id,$collection);
       return $data;
   }

   public function destroy($id)
   {
       $this->ministry->delete($id);  
       return response()->noContent();
   }
}
