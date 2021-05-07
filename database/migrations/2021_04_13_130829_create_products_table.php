<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('имя продукта');
            $table->string('unit')->comment('единица измерения(штука, пачка, кг)');
            $table->tinyInteger('sale')->nullable()->comment('размер скидки в %');
            $table->boolean('news')->default(false)->comment('является ли новинкой');
            $table->unsignedSmallInteger('price')->comment('цена');
            $table->string('img')->comment('путь до картинки');
            $table->text('description')->comment('описание товара');
            $table->text('shelf_life')->comment('срок годности и условия хранения');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
