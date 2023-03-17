<?php
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class ApplicantTypeProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\ApplicantType\ApplicantTypeInterface',
	  'Modules\Admin\FormSetting\Repositories\ApplicantType\ApplicantTypeRepository',
      'Modules\Admin\FormSetting\Services\ApplicantTypeService'
	);
    }
}
?>