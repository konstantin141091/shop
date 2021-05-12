<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'вареная',
            'slug' => 'varenaya',
//            'sale' => null,
        ]);
        DB::table('categories')->insert([
            'name' => 'полукопченая',
            'slug' => 'polukopchenaya',
//            'sale' => 10,
        ]);
        DB::table('categories')->insert([
            'name' => 'сосиски',
            'slug' => 'sosiski',
//            'sale' => 25,
        ]);
        DB::table('categories')->insert([
            'name' => 'ветчина',
            'slug' => 'vetchina',
//            'sale' => null,
        ]);
    }
}
