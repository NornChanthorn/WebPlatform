<?php
namespace Modules\Admin\Applicants\Repositories;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class ApplicantRepository implements ApplicantInterface
{
	//To view all the data
	public function applicant_list()
	{

	}
    public function applicant_draft()
	{

	}
    public function applicant_registered($course_id)
    {
        $id = 1;
		return User::where('role_ids',$id)->where('applicant_academic_type_id',$course_id)->get();
    }
}
