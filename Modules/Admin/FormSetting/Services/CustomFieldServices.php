<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\CustomField\CustomFieldInterface;

class CustomFieldServices
{
   protected $custom_field;
   public function __construct(CustomFieldInterface $custom_field){
       $this->custom_field = $custom_field;
   }

   public function getAllCustomFields()
   {
       $custom_fields = $this->custom_field->all();
       return $custom_fields;
   }

   public function addNewCustomField(array $data)
   {
       $custom_field = $this->custom_field->store($data);
       return $custom_field;
   }

   public function showCustomFieldById($id)
   {
       $custom_field = $this->custom_field->get($id);
       return $custom_field;
   }

   public function updateCustomFieldById($id,array $data)
   {
       $custom_field = $this->custom_field->update($id,$data);
       return $custom_field;
   }

   public function destroyCustomFieldById($id)
   {
       $this->custom_field->delete($id);  
       return response()->noContent();
   }
}
