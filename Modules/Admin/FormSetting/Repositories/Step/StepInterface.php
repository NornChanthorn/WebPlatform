<?php

namespace Modules\Admin\FormSetting\Repositories\Step;

interface StepInterface
{
   public function all();

   public function get($id);

   public function store(array $data);

   public function update($id, array $data);

   public function delete($id);
}
