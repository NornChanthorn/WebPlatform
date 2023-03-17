<?php

namespace Modules\Admin\Settings\Controllers\Api;

use Modules\Admin\Settings\Controllers\Controller;
use Modules\Admin\Settings\Requests\StoreRoleRequest;
use Modules\Admin\Settings\Requests\UpdateRoleRequest;
use Modules\Admin\Settings\Resources\Resource;
use Modules\Admin\Settings\Services\RoleServices;

class RoleController extends Controller
{
    protected $role;
    public function __construct(RoleServices $role)
    {
        $this->role = $role;
        $this->middleware('auth');
    }

    public function index()
    {
        $roles = $this->role->getAllRoles();
        return Resource::collection($roles);
    }

    public function store(StoreRoleRequest $request)
    {
        $role = $this->role->addNewRole($request->validated());
        $role->syncPermissions($request->input('permissions'));
        return new Resource($role);
    }

    public function show($id)
    {
        $role = $this->role->showRoleById($id);
        return new Resource($role);
    }

    public function update($id, UpdateRoleRequest $request)
    {
        $role = $this->role->updateRoleById($id, $request->validated());
        $role->syncPermissions($request->input('permissions'));
        return new Resource($role);
    }

    public function destroy($id)
    {
        $this->role->destroyRoleById($id);
        return response()->noContent();
    }
}
