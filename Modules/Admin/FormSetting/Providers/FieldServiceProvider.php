<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class FieldServiceProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
      'Modules\Admin\FormSetting\Repositories\Field\FieldInterface',
      'Modules\Admin\FormSetting\Repositories\Field\FieldRepository',
      'Modules\Admin\FormSetting\Services\FieldServices'
	);
    }
}
