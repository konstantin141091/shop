<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'test@mail.ru',
            'password' => Hash::make('admin141091'),
            'phone' => 9145226691,
            'location' => 'г Чита, Забайкальский край',
            'address' => 'Ленина 122, кв. 44'
        ]);
        DB::table('users')->insert([
            'name' => 'admin1',
            'email' => 'test1@mail.ru',
            'password' => Hash::make('admin123')
        ]);
    }
}
