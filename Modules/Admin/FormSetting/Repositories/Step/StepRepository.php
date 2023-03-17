<?php

namespace Modules\Admin\FormSetting\Repositories\Step;

use Modules\Admin\FormSetting\Models\steps;

class StepRepository implements StepInterface
{
	//To view all the data
	public function all()
	{
		return steps::get();
	}
	//Get an individual record
	public function get($id)
	{
		return steps::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return steps::create($data);
	}
	//Update the data
	public function update($id, array $data)
	{
		return steps::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return steps::destroy($id);
	}
}
