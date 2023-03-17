<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Admin\Settings\Models\smtp;

class MailSeeder extends Seeder
{
    
    public function run()
    {
        smtp::create([
            'smtp_transport'            =>'smtp',
            'smtp_host'                 =>'smtp.mailtrap.io',
            'smtp_port'                 =>'2525',
            'smtp_encryption'           =>'tls',
            'smtp_user'                 =>'955bb02201b3f3',
            'smtp_password'             =>'fe588047b65f6f',
            'smtp_from'                 =>'soklieng@gmail.com',
            'school_name'               => 'CADT',
        ]);
    }
}