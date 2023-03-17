<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\AAT\AATInterface;

class AATServices
{
   protected $applicant_academic_type;
   public function __construct(AATInterface $applicant_academic_type){
       $this->applicant_academic_type = $applicant_academic_type;
   }

   public function getAllAATs()
   {
       $applicant_academic_types = $this->applicant_academic_type->all();
       return $applicant_academic_types;
   }

   public function addNewAAT(array $data)
   {
       $applicant_academic_type = $this->applicant_academic_type->store($data);
       return $applicant_academic_type;
   }

   public function showAATById($id)
   {
       $applicant_academic_type = $this->applicant_academic_type->get($id);
       return $applicant_academic_type;
   }

   public function updateAATById($id,array $data)
   {
       $applicant_academic_type = $this->applicant_academic_type->update($id,$data);
       return $applicant_academic_type;
   }

   public function destroyAATById($id)
   {
       $this->applicant_academic_type->delete($id);  
       return response()->noContent();
   }
}
?>