<?php
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\Province\ProvinceInterface;

class ProvinceServices
{
   protected $province;
   public function __construct(ProvinceInterface $province){
       $this->province = $province;
   }

   public function getAllProvinces()
   {
       $provinces = $this->province->all();
       return $provinces;
   }

   public function addNewProvince(array $data)
   {
       $province = $this->province->store($data);
       return $province;
   }

   public function showProvinceById($id)
   {
       $province = $this->province->get($id);
       return $province;
   }

   public function updateProvinceById($id,array $data)
   {
       $province = $this->province->update($id,$data);
       return $province;
   }

   public function destroyProvinceById($id)
   {
       $this->province->delete($id);  
       return response()->noContent();
   }
}
