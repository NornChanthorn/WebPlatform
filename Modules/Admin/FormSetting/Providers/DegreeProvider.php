<?php
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class DegreeProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\Degree\DegreeInterface',
	  'Modules\Admin\FormSetting\Repositories\Degree\DegreeRepository',
      'Modules\Admin\FormSetting\Services\DegreeService'
	);
    }
}
?>