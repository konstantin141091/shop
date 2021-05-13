<?php

namespace App\Imports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;

use \PhpOffice\PhpSpreadsheet\Shared\Date;

class ProductsImport implements ToModel, WithHeadingRow, SkipsOnFailure, WithValidation, WithCalculatedFormulas
{
    use Importable;
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        if (Product::query()->where('name', '=', $row['nazvanie'])->first()) {
            return null;
        }

        if (!$row['opisanie']) {
            $description = 'Описания нет';
        } else {
            $description = $row['opisanie'];
        }

        if (!$row['srok_xraneniya']) {
            $shelf_life = 'Описания нет';
        } else {
            $shelf_life = $row['srok_xraneniya'];
        }

        if (!$row['novyi_tovar_ili_net']) {
            $news = false;
        } else {
            $news = $row['novyi_tovar_ili_net'];
        }

        return new Product([
            'name' => $row['nazvanie'],
            'unit'    => $row['unit'],
            'sale' => $row['skidka_tovara'],
            'news' => $news,
            'price' => $row['cena'],
            'img' => $row['izobrazenie'],
            'description' => $description,
            'shelf_life' => $shelf_life,
            'category_id' => $row['category_id'],
        ]);
    }

    public function rules(): array
    {
        return [
            'nazvanie' => 'required',
            'cena' => 'required',
            'unit' => 'required',
            'category_id' => 'required',
        ];
    }

    public function onFailure(Failure ...$failures)
    {
        // Handle the failures how you'd like.
    }
}
