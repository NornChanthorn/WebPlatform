<?php

namespace Modules\Admin\FormSetting\Controllers\Api;

use Modules\Admin\FormSetting\Controllers\Controller;
use Modules\Admin\FormSetting\Requests\StoreForeignLangRequest;
use Modules\Admin\FormSetting\Resources\ForeingLangResource;
use Modules\Admin\FormSetting\Resources\Resource;
use Modules\Admin\FormSetting\Services\ForeignLangServices;

class ForeignLangController extends Controller
{
    protected $foreign_lang;
    public function __construct(ForeignLangServices $foreign_lang)
    {
        $this->foreign_lang = $foreign_lang;
        $this->middleware('auth');
    }

    public function index()
    {
        $foreign_langs = $this->foreign_lang->getAllForeignLangs();
        return Resource::collection($foreign_langs);
    }

    public function store(StoreForeignLangRequest $request)
    {
        $foreign_lang = $this->foreign_lang->addNewForeignLang($request->validated());
        return new Resource($foreign_lang);
    }

    public function show($id)
    {
        $foreign_lang = $this->foreign_lang->showForeignLangById($id);
        return new Resource($foreign_lang);
    }

    public function update($id, StoreForeignLangRequest $request)
    {
        $foreign_lang = $this->foreign_lang->updateForeignLangById($id, $request->validated());
        return new Resource($foreign_lang);
    }

    public function destroy($id)
    {
        $this->foreign_lang->destroyForeignLangById($id);
        return response()->noContent();
    }
}
