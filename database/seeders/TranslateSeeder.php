<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Hash;
class TranslateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('translates')->insert([
            'default_phrase' => 'login',
            'en'=> 'Login',
            'kh' => 'ចូលគណនី',
            'status' => 'Active'
        ]);
    }
}
