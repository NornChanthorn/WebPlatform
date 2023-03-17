<?php
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class StudentTypeProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\StudentType\StudentTypeInterface',
	  'Modules\Admin\FormSetting\Repositories\StudentType\StudentTypeRepository',
      'Modules\Admin\FormSetting\Services\StudentTypeService'
	);
    }
}
?>