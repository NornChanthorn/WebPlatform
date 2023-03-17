<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Requests\StoreStepRequest;
use Modules\Admin\FormSetting\Resources\Resource;
use Modules\Admin\FormSetting\Services\StepServices;
class StepController extends Controller
{
    protected $step;
    public function __construct(StepServices $step )
    {
        $this->step = $step ;
        // $this->middleware('auth');
    }

    public function index()
    {
        $steps = $this->step->getAllSteps();
        return Resource::collection($steps);
    }

    public function store(StoreStepRequest $request)
    {
        $step = $this->step->addNewStep($request->validated());
        return new Resource($step);
    }

    public function show($id)
    {
        $step = $this->step->showStepById($id);
        return new Resource($step);
    }

    public function update($id, StoreStepRequest $request)
    {
        $step = $this->step->updateStepById($id, $request->validated());
        return new Resource($step);
    }

    public function destroy($id)
    {
        $this->step->destroyStepById($id);
        return response()->noContent();
    }
}
