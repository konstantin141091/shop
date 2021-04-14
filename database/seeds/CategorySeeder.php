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
            'name' => 'category1',
            'sale' => null,
        ]);
        DB::table('categories')->insert([
            'name' => 'category2',
            'sale' => 10,
        ]);
        DB::table('categories')->insert([
            'name' => 'category3',
            'sale' => 25,
        ]);
    }
}
