<?php

namespace Modules\Admin\FormSetting\Repositories\Department;

use Modules\Admin\FormSetting\Models\Department;

class DepartmentRepository implements DepartmentInterface
{
	//To view all the data
	public function all()
	{
		return Department::get();
	}
	//Get an individual record
	public function get($id)
	{
		return Department::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return Department::create($data);
	}
	//Update the data
	public function update($id, array $data)
	{
		return Department::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return Department::destroy($id);
	}
}
