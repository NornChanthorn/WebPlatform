<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class SectionProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\Section\SectionInterface',
	  'Modules\Admin\FormSetting\Repositories\Section\SectionRepository',
      'Modules\Admin\FormSetting\Services\SectionService'
	);
    }
}
?>