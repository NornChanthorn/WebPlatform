<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Admin\FormSetting\Services\MinistryService;
use Log;

class MinistryController extends Controller
{
    public $Ministry;
    public function __construct(MinistryService $Ministry)
    {
        $this->ministry= $Ministry;
    }

    public function index(){
        $data= $this->ministry->getData();
        return response()->json($data);
    }

    public function getUserId($id)
    {      
        $data= $this->ministry->getById($id);
        return response()->json([
            'status' => 'Shown User Id',
            'Data' => $data
        ]);
    }

    public function store(Request $req)
    {
        $collection= $req->validate([
            'name' =>'required',
            'name_kh' =>'required',
            'abbrev' =>'',
            'description' => '',
        ]);
        $data= $this->ministry->create($collection);   
        return response()->json($data);
    }
   public function update(Request $req, $id){
       $collection = $req->validate([
          'name' =>'required',
          'name_kh' =>'required',
          'abbrev' =>'',
          'description' =>''
       ]);
       $data= $this->ministry->update($id, $collection);
       return response()->json(['update successful' => $data]);

   }
 

    public function destroy($id){
        $this->ministry->destroy($id);
        return response()->json([
            'status' => 'deleted data',      
        ]);
    }
}
