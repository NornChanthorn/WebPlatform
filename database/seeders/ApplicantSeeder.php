<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Applicant;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ApplicantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()

    {
        DB::table('applicants')->insert(
            [
                'firstname'=> 'Çhanthorn',
                'lastname'=> 'Norn',
                'email' => 'a@email.com',
                'password'=> '11',
                'dob' => '15 sept 2002'

            ]
            );
    }
}
