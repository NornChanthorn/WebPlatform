<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\District\DistrictInterface;

class DistrictServices
{
   protected $district;
   public function __construct(DistrictInterface $district){
       $this->district = $district;
   }

   public function getAllDistricts()
   {
       $districts = $this->district->all();
       return $districts;
   }

   public function addNewDistrict(array $data)
   {
       $district = $this->district->store($data);
       return $district;
   }

   public function showDistrictById($id)
   {
       $district = $this->district->get($id);
       return $district;
   }

   public function updateDistrictById($id,array $data)
   {
       $district = $this->district->update($id,$data);
       return $district;
   }

   public function destroyDistrictById($id)
   {
       $this->district->delete($id);  
       return response()->noContent();
   }
}
?>