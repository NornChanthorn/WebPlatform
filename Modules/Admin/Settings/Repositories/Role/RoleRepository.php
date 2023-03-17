<?php

namespace Modules\Admin\Settings\Repositories\Role;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleRepository implements RoleInterface
{
	//To view all the data
	public function all()
	{   
		return Role::with('permissions')->get();
	}
	//Get an individual record  
	public function get($id) 
	{
		$rolePermissions = Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
		->where("role_has_permissions.role_id",$id)->get();
		return $rolePermissions;
	}
	//Store the data
	public function store(array $data)
	{
		return Role::create($data);
	}
	//Update the data
	public function update($id,array $data)
	{
		$role = Role::find($id);
		$role->update($data);
		return $role;
	}
	//Delete the data
	public function delete($id)
	{
		return Role::destroy($id);
	}

}
