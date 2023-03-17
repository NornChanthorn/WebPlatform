<?php
namespace App\Interface;
interface SubStudentTypeInterface
{
    public function getAll();
    public function create(array $collection);
    public function update($id, array $collection);
    public function getById($id);
    public function destroy($id);
}