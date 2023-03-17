<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Admin\FormSetting\Services\StudentTypeService;
class StudentTypeController extends Controller
{
    public $StudentType;
    public function __construct(StudentTypeService $StudentType)
    {
        $this->student_type= $StudentType;
    }

    public function index(){
        $data= $this->student_type->getData();
        return response()->json([
         'data' => $data
        ]);
    }

    public function getUserId($id)
    {      
        $data= $this->student_type->getById($id);
        return response()->json([
            'Data' => $data
        ]);
    }

    public function store(Request $req)
    {
        $collection= $req->validate([
            'name' =>'required',
        ]);
        $data= $this->student_type->create($collection);   
        return response()->json($data);
    }
   public function update(Request $req, $id){
       $collection = $req->validate([
          'name' =>'required',
       ]);
       $data= $this->student_type->update($id, $collection);
       return response()->json(['update successful' => $data]);

   }
 
    public function destroy($id){
        $this->student_type->destroy($id);
        return response()->json([
            'status' => 'deleted data',      
        ]);
    }
}
