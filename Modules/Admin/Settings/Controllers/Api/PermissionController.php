<?php

namespace  Modules\Admin\Settings\Controllers\Api;

use App\Models\User;
use Modules\Admin\Settings\Resources\Resource;
use Modules\Admin\Settings\Controllers\Controller;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $permission = Permission::all();
        return Resource::collection($permission);
    }

    public function userPermission()
    {
        $user = auth()->user();
        $user = User::join('model_has_roles', 'users.id', '=', 'model_id')->where('model_has_roles.model_id', $user->id)
            ->join('roles', 'roles.id', '=', 'role_id')
            ->join('role_has_permissions', 'roles.id', '=', 'role_has_permissions.role_id')
            ->join('permissions', 'permissions.id', '=', 'permission_id')
            ->pluck('permissions.name as permission');
        return $user;
    }

    public function userRole()
    {
        $user = auth()->user();
        $user = User::join('model_has_roles', 'users.id', '=', 'model_id')->where('model_has_roles.model_id', $user->id)
            ->join('roles', 'roles.id', '=', 'role_id')
            ->pluck('roles.name as role');
        return $user;
    }
}
