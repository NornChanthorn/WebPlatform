<?php
namespace Modules\Admin\FormSetting\Repositories\ApplicantType;
interface ApplicantTypeInterface {
    public function getAll();
    public function getById($id);
    public function delete($id);
    public function create(array $collection);
    public function update($id, array $collection);

}