<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Applicants\Repositories;

interface ApplicantInterface
{
   public function applicant_list();

   public function applicant_draft();

   public function applicant_registered($course_id);
}
?>