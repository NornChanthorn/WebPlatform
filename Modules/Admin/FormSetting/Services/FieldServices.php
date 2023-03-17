<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\Field\FieldInterface;

class FieldServices
{
   protected $field;
   public function __construct(FieldInterface $field){
       $this->field = $field;
   }

   public function getAllFields()
   {
       $fields = $this->field->all();
       return $fields;
   }

   public function addNewField(array $data)
   {
       $field = $this->field->store($data);
       return $field;
   }

   public function showFieldById($id)
   {
       $field = $this->field->get($id);
       return $field;
   }

   public function updateFieldById($id,array $data)
   {
       $field = $this->field->update($id,$data);
       return $field;
   }

   public function destroyFieldById($id)
   {
       $this->field->delete($id);  
       return response()->noContent();
   }
}
