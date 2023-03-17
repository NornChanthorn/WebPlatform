<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;
use Illuminate\Support\ServiceProvider;

class AATServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
        'Modules\Admin\FormSetting\Repositories\AAT\AATInterface',
        'Modules\Admin\FormSetting\Repositories\AAT\AATRepository',
        'Modules\Admin\FormSetting\Services\AATServices'
        );
    }
}
