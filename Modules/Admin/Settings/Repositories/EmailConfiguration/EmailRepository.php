<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Settings\Repositories\EmailConfiguration;

use Modules\Admin\Settings\Models\Email;
use Modules\Admin\Settings\Models\Smtp;

class EmailRepository implements EmailInterface
{
	//To view all the data
	public function all()
	{
		return Email::get();
	}
	//Get an individual record
	public function get($id)
	{
		return Email::find($id);
	}
	//Store the data
	public function store(array $data)
	{
		return Email::create($data);
	}
	//Update the data
	public function update($id,array $data)
	{
		return Email::find($id)->update($data);
	}
	//Delete the data
	public function delete($id)
	{
		return Email::destroy($id);
	}
}
?>