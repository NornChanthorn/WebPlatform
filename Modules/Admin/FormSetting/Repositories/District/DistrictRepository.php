<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Repositories\District;

use Modules\Admin\FormSetting\Models\District;
use Modules\Admin\FormSetting\Repositories\District\DistrictInterface;

class DistrictRepository implements DistrictInterface
{
	//To view all the data
	public function all()
	{
		return District::join('provinces','province_id','=','provinces.id')
		->get(['districts.*','provinces.name as provinces']);
	}
	//Get an individual record
	public function get($id)
	{ 
		return District::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return District::create($data);
	}
	//Update the data
	public function update($id,array $data)
	{
		return District::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return District::destroy($id);
	}

}
?>