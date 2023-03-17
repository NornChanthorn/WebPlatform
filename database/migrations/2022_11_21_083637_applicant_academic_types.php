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
        Schema::create('applicant_academic_types', function (Blueprint $table) {
            $table->id();
            $table->integer('student_type_id');
            $table->integer('sub_student_type_id');
            $table->integer('applicant_type_id');
            $table->string('display_name');
            $table->integer('academic_year_id');
            $table->integer('nu_max_registration_count');
            $table->boolean('is_active')->default(true);
            $table->boolean('is_selectable')->default(true);
            $table->boolean('is_expired')->default(false);
            $table->integer('option_order');
            $table->integer('department_id')->nullable();
            $table->integer('section_id')->nullable();
            $table->string('file1')->nullable();
            $table->string('file2')->nullable();
            $table->string('file3')->nullable();
            $table->string('file4')->nullable();
            $table->string('file5')->nullable();
            $table->string('file6')->nullable();
            $table->string('file7')->nullable();
            $table->string('file8')->nullable();
            $table->boolean('is_file1_required')->default(false);
            $table->boolean('is_file2_required')->default(false);
            $table->boolean('is_file3_required')->default(false);
            $table->boolean('is_file4_required')->default(false);
            $table->boolean('is_file5_required')->default(false);
            $table->boolean('is_file6_required')->default(false);
            $table->boolean('is_file7_required')->default(false);
            $table->boolean('is_file8_required')->default(false);

            $table->string('note');
            $table->string('approved_email_template');

            $table->boolean('is_allow_applicant_print_fact_sheet')->default(true);
            $table->boolean('is_show_photo_in_fact_sheet')->default(true);
            $table->string('registration_type')->default('Count on Submit');
            $table->boolean('is_default_option');
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
        Schema::dropIfExists('applicant_academic_types');
    }
};
