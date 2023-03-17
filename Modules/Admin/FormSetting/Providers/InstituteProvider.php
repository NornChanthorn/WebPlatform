<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class InstituteProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\Institute\InstituteInterface',
	  'Modules\Admin\FormSetting\Repositories\Institute\InstituteRepository',
      'Modules\Admin\FormSetting\Services\InstituteService'
	);
    }
}
?>