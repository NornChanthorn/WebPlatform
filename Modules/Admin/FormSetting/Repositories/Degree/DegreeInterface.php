<?php
namespace Modules\Admin\FormSetting\Repositories\Degree;
interface DegreeInterface {
    public function getAll();
    public function getById($id);
    public function delete($id);
    public function create(array $collection);
    public function update($id, array $collection);

}