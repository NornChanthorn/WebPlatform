<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class ForeignLangServiceProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\FormSetting\Repositories\ForeignLang\ForeignLangInterface',
	  'Modules\Admin\FormSetting\Repositories\ForeignLang\ForeignLangRepository',
      'Modules\Admin\FormSetting\Services\ForeignLangServices'
	);
    }
}
?>