<?php
namespace Modules\Admin\FormSetting\Repositories\Province;

use Modules\Admin\FormSetting\Models\Province;
use Modules\Admin\FormSetting\Repositories\Province\ProvinceInterface;

class ProvinceRepository implements ProvinceInterface
{
	//To view all the data
	public function all()
	{
		return Province::get();
	}
	//Get an individual record
	public function get($id)
	{
		return Province::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return Province::create($data);
	}
	//Update the data
	public function update($id,array $data)
	{
		return Province::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return Province::destroy($id);
	}

}
