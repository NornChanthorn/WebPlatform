<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Providers;

use Illuminate\Support\ServiceProvider;

class DepartmentServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            'Modules\Admin\FormSetting\Repositories\Department\DepartmentInterface',
            'Modules\Admin\FormSetting\Repositories\Department\DepartmentRepository',
            'Modules\Admin\FormSetting\Services\DepartmentServices'
        );
    }
}
