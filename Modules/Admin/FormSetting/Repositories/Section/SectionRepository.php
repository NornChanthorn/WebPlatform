<?php

namespace Modules\Admin\FormSetting\Repositories\Section;
use Modules\Admin\FormSetting\Repositories\Section\SectionInterface;
use Modules\Admin\FormSetting\Models\Section;
class SectionRepository implements SectionInterface
{
  protected $section= null;
  public function getData(){
     return Section::all();
  }

  public function create(array $collection){
     return Section::create($collection);
  }
  public function update($id, array $collection){
    return Section::whereId($id)->update($collection);
  }
  public function getSpecific($id){
    return Section::find($id);
  }

  public function destroy($id){
    return Section::find($id)->delete();
  }

}