<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('fields', function (Blueprint $table) {
            $table->id();
            $table->integer('steps_id');
            $table->string('fieldType');
            $table->string('label');
            $table->string('dataType');
            $table->integer('fieldIndex');
            $table->boolean('required');
            $table->string('placeholder');
            $table->integer('column');
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
        //
    }
};
