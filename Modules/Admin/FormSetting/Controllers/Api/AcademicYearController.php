<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Admin\FormSetting\Services\AcademicYearService;
use Log;

class AcademicYearController extends Controller
{
    public $AcademicYear;
    public function __construct(AcademicYearService $AcademicYear)
    {
        $this->a_year= $AcademicYear;
    }
    public function index(){
        $data= $this->a_year->getData();
        return response()->json($data);
    }
    public function getUserId($id)
    {      
        $data= $this->a_year->getById($id);
        return response()->json([
            'status' => 'Shown User Id',
            'Data' => $data
        ]);
    }
    public function store(Request $req)
    {
        $collection= $req->validate([
            'academic_year' =>'required',    
        ]);
        $data= $this->a_year->create($collection);   
        return response()->json($data);   
    }
    public function update(Request $req, $id){
       $collection = $req->validate([
          'academic_year' =>'required',
       ]);
       $data= $this->a_year->update($id, $collection);
       return response()->json(['update successful' => $data]);
    }
    public function destroy($id){
        $this->a_year->destroy($id);
        return response()->json([
            'status' => 'deleted data',      
        ]);
    }
}
