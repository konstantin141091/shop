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
        dd($row);
        if (Product::query()->where('name', '=', $row['protokol'])->first()) {
            return null;
        }

        return new Product([
            'name' => $row['protokol'],
            'unit'    => $row['familiya'],
            'sale' => $row['otcestvo'],
            'news' => $row['razryad'],
            'price' => $row['svidetelstvo'],
            'img' => $row['udostoverenie'],
            'description' => $row['udostoverenie'],
            'shelf_life' => $row['kvalifikaciya'],
        ]);
    }

    public function rules(): array
    {
        return [
//            'name' => 'required',
//            'unit' => 'required',
//            'imya' => 'required',
//            'otcestvo' => 'required',
//            'data' => 'required',
        ];
    }

    public function onFailure(Failure ...$failures)
    {
        // Handle the failures how you'd like.
    }
}
