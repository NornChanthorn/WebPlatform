<?php
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class AcademicYearProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\AcademicYear\AcademicYearInterface',
	  'Modules\Admin\FormSetting\Repositories\AcademicYear\AcademicYearRepository',
      'Modules\Admin\FormSetting\Services\AcademicYearService'
	);
    }
}
?>