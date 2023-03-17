<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Settings\Providers;
use Illuminate\Support\ServiceProvider;

class UserServiceProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\Settings\Repositories\User\UserInterface',
	  'Modules\Admin\Settings\Repositories\User\UserRepository',
      'Modules\Admin\Settings\Services\UserServices'
	);
    }
}
?>