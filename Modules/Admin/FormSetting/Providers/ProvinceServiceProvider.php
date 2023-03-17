<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class ProvinceServiceProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\Province\ProvinceInterface',
	  'Modules\Admin\FormSetting\Repositories\Province\ProvinceRepository',
      'Modules\Admin\FormSetting\Services\ProvinceServices'
	);
    }
}
?>