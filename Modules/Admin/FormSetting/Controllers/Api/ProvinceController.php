<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Requests\StoreProvinceRequest;
use Modules\Admin\FormSetting\Resources\Resource;
use Modules\Admin\FormSetting\Services\ProvinceServices;

class ProvinceController extends Controller
{
    protected $province;
    public function __construct(ProvinceServices $province)
    {
        $this->province = $province;
        $this->middleware('auth');
    }

    public function index()
    {
        $provinces = $this->province->getAllProvinces();
        return Resource::collection($provinces);
    }

    public function store(StoreProvinceRequest $request)
    {
        $province = $this->province->addNewProvince($request->validated());
        return new Resource($province);
    }

    public function show($id)
    {
        $province = $this->province->showProvinceById($id);
        return new Resource($province);
    }

    public function update($id, StoreProvinceRequest $request)
    {
        $province = $this->province->updateProvinceById($id, $request->validated());
        return new Resource($province);
    }

    public function destroy($id)
    {
        $this->province->destroyProvinceById($id);
        return response()->noContent();
    }
}
