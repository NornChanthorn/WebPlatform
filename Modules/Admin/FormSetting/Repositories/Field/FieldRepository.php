<?php

namespace Modules\Admin\FormSetting\Repositories\Field;

use Modules\Admin\FormSetting\Models\fields;

class FieldRepository implements FieldInterface
{
	//To view all the data
	public function all()
	{
		return fields::get();
	}
	//Get an individual record
	public function get($id)
	{
		return fields::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return fields::create($data);
	}
	//Update the data
	public function update($id, array $data)
	{
		return fields::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return fields::destroy($id);
	}
}
