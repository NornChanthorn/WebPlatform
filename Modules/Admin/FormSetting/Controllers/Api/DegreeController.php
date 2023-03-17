<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Admin\FormSetting\Services\DegreeService;

class DegreeController extends Controller
{
    public $Degree;
    public function __construct(DegreeService $Degree)
    {
        $this->degree= $Degree;
    }
    public function index(){
        $data= $this->degree->getData();
        return response()->json($data);
    }
    public function getUserId($id)
    {      
        $data= $this->degree->getById($id);
        return response()->json([
            'status' => 'Shown User Id',
            'Data' => $data
        ]);
    }
    public function store(Request $req)
    {
        $collection= $req->validate([
            'name' =>'required',    
        ]);
        $data= $this->degree->create($collection);   
        return response()->json($data);
    }
    public function update(Request $req, $id){
       $collection = $req->validate([
          'name' =>'required',
       ]);
       $data= $this->degree->update($id, $collection);
       return response()->json(['update successful' => $data]);
    }
    public function destroy($id){
        $this->degree->destroy($id);
        return response()->json([
            'status' => 'deleted data',      
        ]);
    }
}
