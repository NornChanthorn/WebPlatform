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

        Schema::create('applicant_academic_type_attachments', function (Blueprint $table) {
            $table->id();
            $table->integer('applicant_academic_type_id');
            $table->integer('file_id');
            $table->string('file_name');
            $table->boolean('is_profile_printout');
            $table->boolean('is_required');
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
        Schema::dropIfExists('applicant_academic_type_attachments');

    }
};
