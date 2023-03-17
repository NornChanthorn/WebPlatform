<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;

use Illuminate\Support\ServiceProvider;

class CustomFieldServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            'Modules\Admin\FormSetting\Repositories\CustomField\CustomFieldInterface',
            'Modules\Admin\FormSetting\Repositories\CustomField\CustomFieldRepository',
            'Modules\Admin\FormSetting\Services\CustomFieldServices'
        );
    }
}
