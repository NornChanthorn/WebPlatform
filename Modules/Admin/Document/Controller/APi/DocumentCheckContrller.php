<?php
namespace Module\Admin\Document\Controller\APi;

use Modules\Admin\Document\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $user = User::all();
        return response()->json($user);
    }
}
