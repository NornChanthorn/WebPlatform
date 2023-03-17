<?php
namespace Modules\Admin\FormSetting\Repositories\Section;
interface SectionInterface
{
    public function getData();
    public function create(array $collection);
    public function update($id, array $collection);
    public function getSpecific($id);
    public function destroy($id);
}