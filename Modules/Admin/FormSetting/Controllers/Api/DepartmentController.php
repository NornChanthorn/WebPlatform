<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Requests\StoreDepartmentRequest;
use Modules\Admin\FormSetting\Resources\Resource;
use Modules\Admin\FormSetting\Services\DepartmentServices;
class DepartmentController extends Controller
{
    protected $department;
    public function __construct(DepartmentServices $department)
    {
        $this->department = $department;
        $this->middleware('auth');
    }

    public function index()
    {
        $departments = $this->department->getAllDepartments();
        $data= Resource::collection($departments);
        return response()->json($data);
    }

    public function store(StoreDepartmentRequest $request)
    {
        $department = $this->department->addNewDepartment($request->validated());
        return new Resource($department);
    }

    public function show($id)
    {
        $department = $this->department->showDepartmentById($id);
        return new Resource($department);
    }

    public function update($id, StoreDepartmentRequest $request)
    {
        $department = $this->department->updateDepartmentById($id, $request->validated());
        return new Resource($department);
    }

    public function destroy($id)
    {
        $this->department->destroyDepartmentById($id);
        return response()->noContent();
    }
}
