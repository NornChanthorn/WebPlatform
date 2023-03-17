<?php
//(Here the App\Repositories is the folder name)
namespace Modules\Admin\FormSetting\Services;

use Modules\Admin\FormSetting\Repositories\Step\StepInterface;

class StepServices
{
   protected $step;
   public function __construct(StepInterface $step){
       $this->step = $step;
   }

   public function getAllSteps()
   {
       $steps = $this->step->all();
       return $steps;
   }

   public function addNewStep(array $data)
   {
       $step = $this->step->store($data);
       return $step;
   }

   public function showStepById($id)
   {
       $step = $this->step->get($id);
       return $step;
   }

   public function updateStepById($id,array $data)
   {
       $step = $this->step->update($id,$data);
       return $step;
   }

   public function destroyStepById($id)
   {
       $this->step->delete($id);  
       return response()->noContent();
   }
}
