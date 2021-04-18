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
        $data = [
            [
                'name' => 'Старомосковская вареная копченая',
                'count' => '1 шт',
                'sale' => 5,
                'news' => true,
                'price' => 200,
                'img' => 'Staromoskovskaya_varyono_kopchyonnaya.png',
                'description' => 'product description ',
                'shelf_life' => 'product shelf_life ',
                'category_item' => 'вареная'
            ],
            [
                'name' => 'Охотничие колбаски ГОСТ',
                'count' => '1 шт',
                'sale' => 5,
                'news' => true,
                'price' => 600,
                'img' => 'Ohotnich_kolbaski_GOST.png',
                'description' => 'product description ',
                'shelf_life' => 'product shelf_life ',
                'category_item' => 'полукопченая'
            ],
            [
                'name' => 'Колбаса вареная Молочная',
                'count' => '1 шт',
                'sale' => 15,
                'news' => true,
                'price' => 150,
                'img' => 'Kolbasa_varennaya_Molochnaya.png',
                'description' => 'product description ',
                'shelf_life' => 'product shelf_life ',
                'category_item' => 'вареная'
            ],
            [
                'name' => 'Сосиски Кроха',
                'count' => '1 шт',
                'sale' => 10,
                'news' => true,
                'price' => 100,
                'img' => 'Sosiski_kroha.png',
                'description' => 'product description ',
                'shelf_life' => 'product shelf_life ',
                'category_item' => 'сосиски'
            ],
        ];

        for ($i = 0; $i < 60; $i++) {
            $data[] = [
                'name' => 'Полукопченная Армавирская ГОСТ '.$i,
                'count' => '1 кг',
                'sale' => null,
                'news' => false,
                'price' => rand(10, 5000),
                'img' => 'Polukopchyonnaya_Armavarskaya_GOST.png',
                'description' => 'product description '.$i,
                'shelf_life' => 'product shelf_life '. $i,
                'category_item' => 'полукопченая'
            ];
        }

        return $data;
    }
}
