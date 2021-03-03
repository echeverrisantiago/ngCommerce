<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProvidersProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('providers_products', function(Blueprint $table){
            $table->id();
            $table->bigInteger('provider')->unsigned();
            $table->foreign('provider')->references('id')->on('providers')->onDelete('cascade');
            $table->bigInteger('product')->unsigned();
            $table->foreign('product')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('providers_products');
    }
}
