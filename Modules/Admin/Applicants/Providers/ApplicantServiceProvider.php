<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\Applicants\Providers;
use Illuminate\Support\ServiceProvider;

class ApplicantServiceProvider extends ServiceProvider
{
    public function register()
    {
	$this->app->bind(
	  'Modules\Admin\Applicants\Repositories\ApplicantInterface',
	  'Modules\Admin\Applicants\Repositories\ApplicantRepository',
      'Modules\Admin\Applicants\Services\ApplicantServices'
	);
    }
}
