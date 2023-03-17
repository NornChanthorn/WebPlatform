<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Settings\Services;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Modules\Admin\Settings\Repositories\User\UserInterface;

class UserServices
{
    protected $users;
    public function __construct(UserInterface $users)
    {
        $this->users = $users;
    }

    public function getAllUsers()
    {
        $users = $this->users->all();
        return $users;
    }

    public function addNewUser(array $data)
    {
        $data['password'] = Hash::make($data['password']);
        $user = $this->users->store($data);
        return $user;
    }

    public function showUserById($id)
    {
        $user = $this->users->get($id);
        return $user;
    }

    public function updateUserById($id,array $data)
    {
        if (!empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            $data = Arr::except($data, array('password'));
        }
        $user = $this->users->update($id,$data);
        return $user;
    }

    public function destroyUserById($id)
    {
        $this->users->delete($id);
        return response()->noContent();
    }

}
