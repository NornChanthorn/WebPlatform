<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\ForeignLang\ForeignLangInterface;

class ForeignLangServices
{
   protected $foreign_lang;
   public function __construct(ForeignLangInterface $foreign_lang){
       $this->foreign_lang = $foreign_lang;
   }

   public function getAllForeignLangs()
   {
       $foreign_langs = $this->foreign_lang->all();
       return $foreign_langs;
   }

   public function addNewForeignLang(array $data)
   {
       $foreign_lang = $this->foreign_lang->store($data);
       return $foreign_lang;
   }

   public function showForeignLangById($id)
   {
       $foreign_lang = $this->foreign_lang->get($id);
       return $foreign_lang;
   }

   public function updateForeignLangById($id,array $data)
   {
       $foreign_lang = $this->foreign_lang->update($id,$data);
       return $foreign_lang;
   }

   public function destroyForeignLangById($id)
   {
       $this->foreign_lang->delete($id);  
       return response()->noContent();
   }
}
?>