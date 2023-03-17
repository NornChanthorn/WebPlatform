<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class StepServiceProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
      'Modules\Admin\FormSetting\Repositories\Step\StepInterface',
      'Modules\Admin\FormSetting\Repositories\Step\StepRepository',
      'Modules\Admin\FormSetting\Services\StepServices'
	);
    }
}
