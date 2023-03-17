<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Requests\StoreAATRequest;
use Modules\Admin\FormSetting\Requests\StoreDistrictRequest;
use Modules\Admin\FormSetting\Resources\Resource;
use Modules\Admin\FormSetting\Services\AATServices;

class AATController extends Controller
{
    protected $applicant_academic_type;
    public function __construct(AATServices $applicant_academic_type)
    {
        $this->applicant_academic_type = $applicant_academic_type;
        // $this->middleware('auth');
    }

    public function index()
    {
        $applicant_academic_types = $this->applicant_academic_type->getAllAATs();
        return Resource::collection($applicant_academic_types);
    }

    public function store(StoreAATRequest $request)
    {
        $applicant_academic_type = $this->applicant_academic_type->addNewAAT($request->validated());
        return new Resource($applicant_academic_type);
    }

    public function show($id)
    {
        $applicant_academic_type = $this->applicant_academic_type->showAATById($id);
        return new Resource($applicant_academic_type);
    }

    public function update($id, StoreAATRequest $request)
    {
        $applicant_academic_type = $this->applicant_academic_type->updateAATById($id, $request->validated());
        return new Resource($applicant_academic_type);
    }

    public function destroy($id)
    {
        $this->applicant_academic_type->destroyAATById($id);
        return response()->noContent();
    }
}
