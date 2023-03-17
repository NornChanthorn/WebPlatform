<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class SubStudentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sub_student_types')->insert([
            'student_id' => '1',
            'name' => 'វគ្គសិក្សាធម្មតា'
        ]);
    }
}
