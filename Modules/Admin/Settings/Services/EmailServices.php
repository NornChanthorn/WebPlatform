<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Settings\Services;

use Modules\Admin\Settings\Repositories\EmailConfiguration\EmailInterface;

class EmailServices
{
   protected $email;
   public function __construct(EmailInterface $email){
       $this->email = $email;
   }

   public function getAllEmails()
   {
       $emails = $this->smtp->all();
       return $emails;
   }

   public function addNewEmail(array $data)
   {
       $email = $this->email->store($data);
       return $email;
   }

   public function showEmailById($id)
   {
       $email = $this->email->get($id);
       return $email;
   }

   public function updateEmailById($id,array $data)
   {
       $email = $this->email->update($id,$data);
       return $email;
   }

   public function destroyEmailById($id)
   {
       $this->email->delete($id);  
       return response()->noContent();
   }
}
?>