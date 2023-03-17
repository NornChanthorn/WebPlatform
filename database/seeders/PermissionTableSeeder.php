<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
           'role list',
           'role create',
           'role edit',
           'role delete',
           'department list',
           'department create',
           'department edit',
           'department delete',
           'smtp config',
           'confirmEmailTemplate config',
           'rejectEmailTemplate config',
           'approveEmailTemplate config',
        ];
        
      
        foreach ($permissions as $permission) {
             Permission::create(['name' => $permission]);
        }
    }
}
