<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Settings\Services;

use Modules\Admin\Settings\Repositories\Translation\TranslationInterface;

class TranslationServices
{
   protected $translation;
   public function __construct(TranslationInterface $translation){
       $this->translation = $translation;
   }

   public function getAllTranslations()
   {
       $translations = $this->translation->all();
       return $translations;
   }

   public function addNewTranslation(array $data)
   {
       $translation = $this->translation->store($data);
       return $translation;
   }

   public function showTranslationById($id)
   {
       $translation = $this->translation->get($id);
       return $translation;
   }

   public function updateTranslationById($id,array $data)
   {
       $translation = $this->translation->update($id,$data);
       return $translation;
   }

   public function destroyTranslationById($id)
   {
       $this->translation->delete($id);  
       return response()->noContent();
   }
}
?>