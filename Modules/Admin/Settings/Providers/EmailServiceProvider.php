<?php

namespace Modules\Admin\Settings\Providers;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;
use Modules\Admin\Settings\Models\Email;

class EmailServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(
            'Modules\Admin\Settings\Repositories\EmailConfiguration\EmailInterface',
            'Modules\Admin\Settings\Repositories\EmailConfiguration\EmailRepository',
            'Modules\Admin\Settings\Services\EmailServices'
          );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
        $smtp = Email::first();
        if($smtp){
            $data = [
                'driver'      => $smtp->smtp_transport,
                'host'        => $smtp->smtp_host,
                'port'        => $smtp->smtp_port,
                'encryption'  => $smtp->smtp_encryption,
                'username'    => $smtp->smtp_user,
                'password'    => $smtp->smtp_password,
                'from'        => [
                    'address' =>$smtp->smtp_from,
                    'name'    =>$smtp->school_name
                ]
            ];
            Config::set('mail',$data);
        }
    }
}
