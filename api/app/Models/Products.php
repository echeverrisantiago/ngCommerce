<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    public $timestamp = false;
    protected $table = 'products';
    protected $fillable = [
        'name',
        'price',
        'description',
        'stock'
    ];
}
