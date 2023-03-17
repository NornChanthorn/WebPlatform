<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Applicants\Services;

use Modules\Admin\Applicants\Repositories\ApplicantInterface;

class ApplicantServices
{
    protected $applicants;
    public function __construct(ApplicantInterface $applicants)
    {
        $this->applicants = $applicants;
    }

    public function getListApplicant()
    {
    }
    public function getDraftApplicant()
    {
    }
    public function getRegisteredApplicant($course_id)
    {
        $applicants = $this->applicants->applicant_registered($course_id);
        return $applicants;
    }
}
