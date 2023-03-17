<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Repositories\District;

interface DistrictInterface
{
   public function all();

   public function get($id);

   public function store(array $data);

   public function update($id, array $data); 

   public function delete($id);

}
?>