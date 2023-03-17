<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Requests\StoreDistrictRequest;
use Modules\Admin\FormSetting\Resources\Resource;
use Modules\Admin\FormSetting\Services\DistrictServices;

class DistrictController extends Controller
{
    protected $district;
    public function __construct(DistrictServices $district)
    {
        $this->district = $district;
        $this->middleware('auth');
    }

    public function index()
    {
        $provinces = $this->district->getAllDistricts();
        return Resource::collection($provinces);
    }

    public function store(StoreDistrictRequest $request)
    {
        $district = $this->district->addNewDistrict($request->validated());
        return new Resource($district);
    }

    public function show($id)
    {
        $district = $this->district->showDistrictById($id);
        return new Resource($district);
    }

    public function update($id, StoreDistrictRequest $request)
    {
        $district = $this->district->updateDistrictById($id, $request->validated());
        return new Resource($district);
    }

    public function destroy($id)
    {
        $this->district->destroyDistrictById($id);
        return response()->noContent();
    }
}
