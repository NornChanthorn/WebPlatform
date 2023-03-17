<?php
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class MinistryProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\Ministry\MinistryInterface',
	  'Modules\Admin\FormSetting\Repositories\Ministry\MinistryRepository',
      'Modules\Admin\FormSetting\Services\MinistryService'
	);
    }
}
?>