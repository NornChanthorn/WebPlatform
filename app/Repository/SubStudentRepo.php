<?php

namespace App\Repository;
use App\Interface\SubStudentTypeInterface;
use App\Models\Admin\SubStudentType;
class SubStudentRepo implements SubStudentTypeInterface
{
  protected $SubStudentType= null;
  public function getAll(){
     return SubStudentType::all();
  }

  public function create(array $collection){
     return SubStudentType::create($collection);
  }
  public function update($id, array $collection){
    return SubStudentType::whereId($id)->update($collection);
  }
  public function getById($id){
    return SubStudentType::find($id);
  }

  public function destroy($id){
    return SubStudentType::find($id)->delete();
  }

}