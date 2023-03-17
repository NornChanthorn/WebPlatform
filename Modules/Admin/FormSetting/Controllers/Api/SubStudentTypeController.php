<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Models\sub_student_type;
use Modules\Admin\FormSetting\Resources\Resource;
use Illuminate\Http\Request;

class SubStudentTypeController extends Controller
{

    public function getByStudentTypeId($student_type_id)
    {
        $data = sub_student_type::where('student_type_id', $student_type_id)->get(['id','type_name']);
        return new Resource($data);
    }
    public function index(){
        $data= sub_student_type::All();
        return response()->json($data);
    }
    public function store(Request $request)
    {       
        $validatedData = $request->validate([
          'type_name' => 'required',
          'student_type_id' => 'required',
        ]);
        $emp = new sub_student_type;
        $emp->type_name = $request->type_name;
        $emp->student_type_id = $request->student_type_id;
        $emp->save();
        return response()->json($emp);
 
    }

    
}
