<?php

namespace Modules\Admin\Applicants\Controllers\Api;

use Modules\Admin\Settings\Controllers\Controller;
use Modules\Admin\Applicants\Resources\Resource;
use Modules\Admin\Applicants\Services\ApplicantServices;

class ApplicantController extends Controller
{
    protected $applicants;
    public function __construct(ApplicantServices $applicants)
    {
        $this->applicants = $applicants;
    }

    public function getAllRegisteredApplicant($course_id)
    {
        $applicants = $this->applicants->getRegisteredApplicant($course_id);
        return Resource::collection($applicants);
    }

}
