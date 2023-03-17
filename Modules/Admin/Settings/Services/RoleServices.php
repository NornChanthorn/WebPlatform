<?php

namespace Modules\Admin\Settings\Services;

use Modules\Admin\Settings\Repositories\Role\RoleInterface;

class RoleServices
{
    protected $roles;
    public function __construct(RoleInterface $roles)
    {
        $this->roles = $roles;
    }

    public function getAllRoles()
    {
        $roles = $this->roles->all();
        return $roles;
    }

    public function addNewRole(array $data)
    {
        $role = $this->roles->store($data);
        return $role;
    }

    public function showRoleById($id)
    {
        $role = $this->roles->get($id);
        return $role;
    }

    public function updateRoleById($id,array $data)
    {
        $role = $this->roles->update($id,$data); 
        return $role;
    }

    public function destroyRoleById($id)
    {
        $this->roles->delete($id);
        return response()->noContent();
    }

}
