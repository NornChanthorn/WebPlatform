<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Repositories\ForeignLang;

use Modules\Admin\FormSetting\Models\foreign_languages;
use Modules\Admin\FormSetting\Repositories\ForeignLang\ForeignLangInterface;

class ForeignLangRepository implements ForeignLangInterface
{
	//To view all the data
	public function all()
	{
		return foreign_languages::all();
	}
	//Get an individual record
	public function get($id)
	{
		return foreign_languages::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return foreign_languages::create($data);
	}
	//Update the data
	public function update($id,array $data)
	{
		return foreign_languages::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return foreign_languages::destroy($id);
	}

}
?>