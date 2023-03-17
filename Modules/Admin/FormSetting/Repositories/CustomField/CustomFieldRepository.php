<?php

namespace Modules\Admin\FormSetting\Repositories\CustomField;

use Modules\Admin\FormSetting\Models\custom_fields;

class CustomFieldRepository implements CustomFieldInterface
{
	//To view all the data
	public function all()
	{
		return custom_fields::get();
	}
	//Get an individual record
	public function get($id)
	{
		return custom_fields::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return custom_fields::create($data);
	}
	//Update the data
	public function update($id, array $data)
	{
		return custom_fields::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return custom_fields::destroy($id);
	}
}
