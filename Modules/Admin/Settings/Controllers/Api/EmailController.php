<?php

namespace Modules\Admin\Settings\Controllers\Api;

use Modules\Admin\Settings\Controllers\Controller;
use Modules\Admin\Settings\Requests\StoreEmailRequest;
use Modules\Admin\Settings\Resources\Resource;
use Modules\Admin\Settings\Services\EmailServices;

class EmailController extends Controller
{
    protected $email;
    public function __construct(EmailServices $email)
    {
        $this->email = $email;
        $this->middleware('auth');
    }

    public function index()
    {
        $emails = $this->email->getAllEmails();
        return Resource::collection($emails);
    }

    public function store(StoreEmailRequest $request)
    {
        $email = $this->email->addNewEmail($request->validated());
        return new Resource($email);
    }

    public function show($id)
    {
        $email = $this->email->showEmailById($id);
        return new Resource($email);
    }

    public function update($id, StoreEmailRequest $request)
    {
        $email = $this->email->updateEmailById($id, $request->validated());
        return new Resource($email);
    }

    public function destroy($id)
    {
        $this->email->destroyEmailById($id);
        return response()->noContent();
    }
}
