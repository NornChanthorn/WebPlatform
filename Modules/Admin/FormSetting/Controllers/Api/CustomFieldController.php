<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Requests\StoreCustomFieldRequest;
use Modules\Admin\FormSetting\Resources\Resource;
use Modules\Admin\FormSetting\Services\CustomFieldServices;
class CustomFieldController extends Controller
{
    protected $custom_field;
    public function __construct(CustomFieldServices $custom_field)
    {
        $this->custom_field = $custom_field ;
        // $this->middleware('auth');
    }

    public function index()
    {
        $custom_fields = $this->custom_field->getAllCustomFields();
        return Resource::collection($custom_fields);
    }

    public function store(StoreCustomFieldRequest $request)
    {
        $custom_field = $this->custom_field->addNewCustomField($request->validated());
        return new Resource($custom_field);
    }

    public function show($id)
    {
        $custom_field = $this->custom_field->showCustomFieldById($id);
        return new Resource($custom_field);
    }

    public function update($id, StoreCustomFieldRequest $request)
    {
        $custom_field = $this->custom_field->updateCustomFieldById($id, $request->validated());
        return new Resource($custom_field);
    }

    public function destroy($id)
    {
        $this->custom_field->destroyCustomFieldById($id);
        return response()->noContent();
    }
}
