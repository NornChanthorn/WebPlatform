<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Interface\InstituteInterface;
use App\Interface\DegreeInterface;
use App\Interface\AcademicYearInterface;
use App\Interface\SectionInterface;
use App\Interface\StudentTypeInterface;
use App\Interface\MinistryInterface;
use App\Interface\ApplicantTypeInterface;
use App\Interface\SubStudentTypeInterface;


use App\Repository\InstituteRepository;
use App\Repository\DegreeRepository;
use App\Repository\AcademicYearRepository;
use App\Repository\SectionRepository;
use App\Repository\StudentTypeRepository;
use App\Repository\MinistryRepository;
use App\Repository\ApplicantTypeRepo;
use App\Repository\SubStudentRepo;


class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(InstituteInterface::class, InstituteRepository::class);
        $this->app->bind(DegreeInterface::class, DegreeRepository::class);
        $this->app->bind(AcademicYearInterface::class, AcademicYearRepository::class);
        $this->app->bind(SectionInterface::class, SectionRepository::class);
        $this->app->bind(StudentTypeInterface::class, StudentTypeRepository::class);
        $this->app->bind(MinistryInterface::class, MinistryRepository::class);
        $this->app->bind(ApplicantTypeInterface::class, ApplicantTypeRepo::class);
        $this->app->bind(SubStudentTypeInterface::class, SubStudentRepo::class);

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
