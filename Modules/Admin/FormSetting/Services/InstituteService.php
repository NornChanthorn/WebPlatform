<?php
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\Institute\InstituteInterface;

class InstituteService
{
   protected $institute;
   public function __construct(InstituteInterface $institute){
       $this->institute = $institute;
   }

   public function getData()
   {
       $data = $this->institute->getAll();
       return $data;
   }

   public function create(array $collection)
   {
       $data = $this->institute->create($collection);
       return $data;
   }

   public function getById($id)
   {
       $data = $this->institute->getById($id);
       return $data;
   }

   public function update($id,array $collection)
   {
       $data = $this->institute->update($id,$collection);
       return $data;
   }

   public function destroy($id)
   {
       $this->institute->delete($id);  
       return response()->noContent();
   }
}
