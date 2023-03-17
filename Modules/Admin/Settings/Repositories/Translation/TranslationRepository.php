<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Settings\Repositories\Translation;
use Modules\Admin\Settings\Models\Translation;

class TranslationRepository implements TranslationInterface
{
	//To view all the data
	public function all()
	{
		return Translation::get();
	}
	//Get an individual record
	public function get($id)
	{
		return Translation::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return Translation::create($data);
	}
	//Update the data
	public function update($id,array $data)
	{
		return Translation::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return Translation::destroy($id);
	}

}
?>