<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class DistrictServiceProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\District\DistrictInterface',
	  'Modules\Admin\FormSetting\Repositories\District\DistrictRepository',
      'Modules\Admin\FormSetting\Services\DistrictServices'
	);
    }
}
?>