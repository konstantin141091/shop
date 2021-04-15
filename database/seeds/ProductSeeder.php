<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert($this->getData());
    }

    private function getData() {
        $data = [];

        for ($i = 0; $i < 60; $i++) {
            $data[] = [
                'name' => 'product '.$i,
                'count' => '1 кг',
                'sale' => null,
                'news' => false,
                'price' => rand(10, 5000),
                'img' => 'Polukopchyonnaya_Armavarskaya_GOST.png',
                'description' => 'product description '.$i,
                'shelf_life' => 'product shelf_life '. $i,
            ];
        }

        return $data;
    }
}
