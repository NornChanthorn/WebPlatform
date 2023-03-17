<?php
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\Section\SectionInterface;

class SectionService
{
   protected $section;
   public function __construct(SectionInterface $section){
       $this->section = $section;
   }

   public function getData()
   {
       $data = $this->section->getData();
       return $data;
   }

   public function create(array $collection)
   {
       $data = $this->section->create($collection);
       return $data;
   }

   public function getById($id)
   {
       $data = $this->section->getSpecific($id);
       return $data;
   }

   public function update($id,array $collection)
   {
       $data = $this->section->update($id,$collection);
       return $data;
   }

   public function destroy($id)
   {
       $this->section->destroy($id);  
       return response()->noContent();
   }
}
