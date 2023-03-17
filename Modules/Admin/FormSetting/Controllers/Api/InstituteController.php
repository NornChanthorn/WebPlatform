<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Admin\FormSetting\Services\InstituteService;
use Log;

class InstituteController extends Controller
{
    public $Institute;
    public function __construct(InstituteService $Institute)
    {
        $this->institute= $Institute;
    }

    public function index(){
        $data= $this->institute->getData();
        return response()->json($data);
    }

    public function getUserId($id)
    {      
        $data= $this->institute->getById($id);
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
        $data= $this->institute->create($collection);   
        return response()->json($data);
    }
   public function update(Request $req, $id){
       $collection = $req->validate([
          'name' =>'required',
          'name_kh' =>'required',
          'abbrev' =>'',
          'description' =>''
       ]);
       $data= $this->institute->update($id, $collection);
       return response()->json(['update successful' => $data]);

   }
 

    public function destroy($id){
        $this->institute->destroy($id);
        return response()->json([
            'status' => 'deleted data',      
        ]);
    }
}
