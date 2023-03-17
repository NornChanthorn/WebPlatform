<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Models\Section;
use Illuminate\Http\Request;
use Modules\Admin\FormSetting\Services\SectionService;
use Modules\Admin\FormSetting\Resources\Resource;

class SectionController extends Controller
{
    public function __construct(SectionService $Section){
        $this->section= $Section;
    }
    public function index(){    
       $data= $this->section->getData();
      return response()->json($data);
    }

    public function show($id){
       $data= $this->section->getById($id);
       return response()->json($data);
    }

    public function store(Request $req){
        $collection= $req->validate([
          'section_name' => 'required',
          'department_id' => 'required'
        ]);
        $data= $this->section->create($collection);
        return response()->json($data);
    }

    public function update(Request $req, $id){
        $collection = $req->validate([
            'section_name' => 'required',
            'department_id' => 'required'
        ]);
        $data = $this->section->update($id, $collection);
        return response()->json($data);
    }

    public function destroy($id){
        $data= $this->section->destroy($id);
        return response()->json([
            'data deleted' => $data
        ]);
    }

    public function getSectionByDepartment($department_id)
    {
        $data = Section::where('department_id', $department_id)->get(['id','section_name']);
        return new Resource($data);
    }
}
