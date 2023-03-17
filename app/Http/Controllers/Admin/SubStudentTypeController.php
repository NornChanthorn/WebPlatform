<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Admin\SubStudentType;
use App\Models\Admin\StudentType;
use App\Interface\SubStudentTypeInterface;

class SubStudentTypeController extends Controller
{
    public $SubStudent;
    public function __construct(SubStudentTypeInterface $SubStudent){
        $this->substudent= $SubStudent;
    }
    public function index(){    
       $data= $this->substudent->getAll();
      return response()->json($data);
    }

    public function show($id){
       $data= $this->substudent->getById($id);
       return response()->json($data);
    }

    public function store(Request $req){
        $collection= $req->only([
          'type_name',
          'student_type_id'
        ]);
        $req->student_type_id= StudentType::where('id');
        $data= $this->substudent->create($collection);
        return response()->json($data);
    }

    public function update(Request $req, $id){
        $collection = $req->validate([
            'type_name' => 'required',
            'student_type_id' => 'required'
      
        ]);
        $data = $this->substudent->update($id, $collection);
        return response()->json($data);
    }

    public function delete($id){
        $data= $this->substudent->destroy($id);
        return response()->json([
            'data deleted' => $data
        ]);
    }

}
