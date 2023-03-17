<?php

namespace Modules\Admin\FormSetting\Repositories\CustomField;

interface CustomFieldInterface
{
   public function all();

   public function get($id);

   public function store(array $data);

   public function update($id, array $data);

   public function delete($id);
}
