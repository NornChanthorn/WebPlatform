<?php
namespace Modules\Admin\Settings\Repositories\User;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UserRepository implements UserInterface
{
	//To view all the data
	public function all()
	{
		$id = 0;
		return User::with('roles')->where('role_ids',$id)->get();
	}
	//Get an individual record
	public function get($id)
	{
		$role = Role::join("model_has_roles","model_has_roles.role_id","=","roles.id")
		->where("model_has_roles.model_id",$id)->get();
		return $role;
	}
	//Store the data
	public function store(array $data)
	{
		return User::create($data);
	}
	//Update the data
	public function update($id,array $data)
	{
		$user = User::find($id);
		$user->update($data);
		return $user;
	}
	//Delete the data
	public function delete($id)
	{
		return User::destroy($id);
	}
}
