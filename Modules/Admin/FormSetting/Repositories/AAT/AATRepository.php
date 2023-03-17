<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Repositories\AAT;

use Modules\Admin\FormSetting\Models\applicant_academic_types;
use Modules\Admin\FormSetting\Repositories\AAT\AATInterface;

class AATRepository implements AATInterface
{
	//To view all the data
	public function all()
	{
		return applicant_academic_types::join('departments', 'departments.id', 'student_type_id')
			->join('sub_student_types', 'sub_student_types.id', '=', 'sub_student_type_id')
			->join('applicant_types', 'applicant_types.id', '=', 'applicant_type_id')
			->get([
				'applicant_academic_types.*',
				'departments.name as student_type_name',
				'sub_student_types.type_name as sub_student_name',
				'applicant_types.type_name as applicant_type_name'
			]);
	}
	//Get an individual record
	public function get($id)
	{
		return applicant_academic_types::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return applicant_academic_types::create($data);
	}
	//Update the data
	public function update($id, array $data)
	{
		return applicant_academic_types::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return applicant_academic_types::destroy($id);
	}
}
