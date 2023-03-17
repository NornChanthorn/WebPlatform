<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Settings\Providers;
use Illuminate\Support\ServiceProvider;

class TranslationServiceProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\Settings\Repositories\Translation\TranslationInterface',
	  'Modules\Admin\Settings\Repositories\Translation\TranslationRepository',
      'Modules\Admin\Settings\Services\Translation\TranslationServices'
	);
    }
}
?>