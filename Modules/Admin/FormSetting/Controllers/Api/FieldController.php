<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Requests\StoreFieldRequest;
use Modules\Admin\FormSetting\Resources\Resource;
use Modules\Admin\FormSetting\Services\FieldServices;
class FieldController extends Controller
{
    protected $field;
    public function __construct(FieldServices $field)
    {
        $this->field = $field ;
        // $this->middleware('auth');
    }

    public function index()
    {
        $fields = $this->field->getAllFields();
        return Resource::collection($fields);
    }

    public function store(StoreFieldRequest $request)
    {
        $field = $this->field->addNewField($request->validated());
        return new Resource($field);
    }

    public function show($id)
    {
        $field = $this->step->showStepById($id);
        return new Resource($field);
    }

    public function update($id, StoreFieldRequest $request)
    {
        $field = $this->field->updateFieldById($id, $request->validated());
        return new Resource($field);
    }

    public function destroy($id)
    {
        $this->field->destroyFieldById($id);
        return response()->noContent();
    }
}
