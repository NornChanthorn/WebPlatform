<?php
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\Admin\SubStudentTypeController as AdminSubStudentTypeController;
use Illuminate\Support\Facades\Route;

//Setting
use Modules\Admin\Settings\Controllers\Api\EmailController;
use Modules\Admin\Settings\Controllers\Api\TranslationController;
use Modules\Admin\Settings\Controllers\Api\RoleController;
use Modules\Admin\Settings\Controllers\Api\UserController;
use Modules\Admin\Settings\Controllers\Api\PermissionController;
//FormSetting
use Modules\Admin\FormSetting\Controllers\Api\AATController;
use Modules\Admin\FormSetting\Controllers\Api\AcademicYearController;
use Modules\Admin\FormSetting\Controllers\Api\DepartmentController;
use Modules\Admin\FormSetting\Controllers\Api\ProvinceController;
use Modules\Admin\FormSetting\Controllers\Api\DistrictController;
use Modules\Admin\FormSetting\Controllers\Api\ForeignLangController;
use Modules\Admin\FormSetting\Controllers\Api\SectionController;
use Modules\Admin\FormSetting\Controllers\Api\InstituteController;
use Modules\Admin\FormSetting\Controllers\Api\SubStudentTypeController;
use Modules\Admin\FormSetting\Controllers\Api\FileAttachmentController;
use Modules\Admin\FormSetting\Controllers\Api\StudentTypeController;
use Modules\Admin\FormSetting\Controllers\Api\MinistryController;
use Modules\Admin\FormSetting\Controllers\Api\ApplicantTypeController;
use Modules\Admin\FormSetting\Controllers\Api\DegreeController;

// Document 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//student

Route::resource('subStudent',SubStudentTypeController ::class);
Route::get('GetsubStudent',[SubStudentTypeController ::class, 'getData']);



// Route::post('register', [AuthController::class, 'register']);
Route::group(['middleware'=>'auth'],function(){
    Route::get('getUser', [AuthController::class, 'getUser']);
    Route::put('update',  [AuthController::class, 'update']);
    Route::put('changePass',  [AuthController::class, 'changePass']);
});

//reset password
Route::post('sendToken', [ResetPasswordController::class, 'sendToken']);
Route::post('validateToken', [ResetPasswordController::class, 'validateToken']);
Route::post('resetPassword', [ResetPasswordController::class, 'resetPassword']);

//FormSetting 

Route::resource('degree', DegreeController::class);

//Auth
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

//FormSetting
Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('departments',DepartmentController::class);
    Route::apiResource('provinces',ProvinceController::class);
    Route::apiResource('districts',DistrictController::class);
    Route::apiResource('foreignlangs',ForeignLangController::class);
    Route::apiResource('section', SectionController::class);
    Route::apiResource('institute', InstituteController::class);
    Route::apiResource('ministry', MinistryController::class);
    Route::apiResource('applicant_type',ApplicantTypeController::class);
    Route::apiResource('degree', DegreeController::class);
});

//Settings
Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('users',UserController::class);
    Route::get('getUserPerm',[PermissionController::class,'userPermission']);
    Route::get('getUserRole',[PermissionController::class,'userRole']);
    Route::apiResource('translations',TranslationController::class);
    Route::apiResource('emails',EmailController::class);
    Route::apiResource('permissions',PermissionController::class);
});

Route::apiResource('roles',RoleController::class);
Route::get('lang',[TranslationController::class,'getAll']);
Route::get('get_sub_student_type_by_student_type/{student_type_id}',[SubStudentTypeController::class,'getByStudentTypeId']);
Route::get('sections_by_department/{department_id}',[SectionController::class,'getSectionByDepartment']);
Route::apiResource('applicant_academic_types',AATController::class);
Route::apiResource('applicant_academic_attactments',FileAttachmentController::class);
Route::apiResource('academic_years',AcademicYearController::class);
Route::apiResource('student_types',StudentTypeController::class);
Route::get('printPDF', [AuthController::class, 'PrintInfo']);