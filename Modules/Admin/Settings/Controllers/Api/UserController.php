<?php

namespace Modules\Admin\Settings\Controllers\Api;

use Illuminate\Support\Facades\DB;
use Modules\Admin\Settings\Controllers\Controller;
use Modules\Admin\Settings\Requests\StoreUserRequest;
use Modules\Admin\Settings\Requests\UpdateUserRequest;
use Modules\Admin\Settings\Resources\Resource;
use Modules\Admin\Settings\Services\UserServices;

class UserController extends Controller
{
    protected $user;
    public function __construct(UserServices $user)
    {
        $this->user = $user;
    }

    public function index()
    {
        $users = $this->user->getAllUsers();
        return Resource::collection($users);
    }

    public function store(StoreUserRequest $request)
    {
        auth()->user();
        $user = $this->user->addNewUser($request->validated());
        $user->assignRole($request->input('roles'));
        return new Resource($user);
    }

    public function show($id)
    {
        $user = $this->user->showUserById($id);
        return new Resource($user);
    }

    public function update($id, UpdateUserRequest $request)
    {
        $user = $this->user->updateUserById($id, $request->validated());
        DB::table('model_has_roles')->where('model_id', $id)->delete();
        $user->assignRole($request->input('roles'));
        return new Resource($user);
    }

    public function destroy($id)
    {
        $this->user->destroyUserById($id);
        return response()->noContent();
    }
}
