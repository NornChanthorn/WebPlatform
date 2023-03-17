<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Admin\FormSetting\Services\ApplicantTypeService;
use Log;

class ApplicantTypeController extends Controller
{
    public $ApplicantType;
    public function __construct(ApplicantTypeService $ApplicantType)
    {
        $this->a_type= $ApplicantType;
    }
    public function index(){
        $data= $this->a_type->getData();
        return response()->json($data);
    }
    public function getUserId($id)
    {      
        $data= $this->a_type->getById($id);
        return response()->json([
            'status' => 'Shown User Id',
            'Data' => $data
        ]);
    }
    public function store(Request $req)
    {
        $collection= $req->validate([
            'type_name' =>'required',    
        ]);
        $data= $this->a_type->create($collection);   
        return response()->json($data);
    }
    public function update(Request $req, $id){
       $collection = $req->validate([
          'type_name' =>'required',
       ]);
       $data= $this->a_type->update($id, $collection);
       return response()->json(['update successful' => $data]);
    }
    public function destroy($id){
        $this->a_type->destroy($id);
        return response()->json([
            'status' => 'deleted data',      
        ]);
    }
}
