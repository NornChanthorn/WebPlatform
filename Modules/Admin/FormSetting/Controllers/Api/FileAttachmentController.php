<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Models\applicant_academic_type_attachment;
use Modules\Admin\FormSetting\Models\files;
use Modules\Admin\FormSetting\Requests\StoreAATattachmentRequest;
use Modules\Admin\FormSetting\Resources\Resource;

class FileAttachmentController extends Controller
{

    public function index()
    {
        $data = applicant_academic_type_attachment::all();
        return new Resource($data);
    }

    public function file($id){
        $data = applicant_academic_type_attachment::where('applicant_academic_types_id', $id)->get('file_id');
        return new Resource($data);
    }

    public function store(StoreAATattachmentRequest $request){
        $data = applicant_academic_type_attachment::create($request->validated());
        return new Resource($data);
    }
}
