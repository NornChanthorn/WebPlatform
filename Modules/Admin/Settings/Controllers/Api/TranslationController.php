<?php

namespace Modules\Admin\Settings\Controllers\Api;

use Modules\Admin\Settings\Controllers\Controller;
use Modules\Admin\Settings\Models\Translation;
use Modules\Admin\Settings\Requests\StoreTranslationRequest;
use Modules\Admin\Settings\Requests\UpdateTranslationRequest;
use Modules\Admin\Settings\Resources\Resource;
use Modules\Admin\Settings\Services\TranslationServices;
use Illuminate\Http\Request;

class TranslationController extends Controller
{
    protected $translation;
    public function __construct(TranslationServices $translation)
    {
        $this->translation = $translation;
        $this->middleware('auth');
    }

    public function index()
    {
        $translations = $this->translation->getAllTranslations();
        return Resource::collection($translations);
    }

    public function store(StoreTranslationRequest $request)
    {
        $translation = $this->translation->addNewTranslation($request->validated());
        return new Resource($translation);
    }

    public function show($id)
    {
        $translation = $this->translation->showTranslationById($id);
        return new Resource($translation);
    }

    public function update($id, UpdateTranslationRequest $request)
    {
        $translation = $this->translation->updateTranslationById($id, $request->validated());
        return new Resource($translation);
    }

    public function destroy($id)
    {
        $this->translation->destroyTranslationById($id);
        return response()->noContent();
    }
    public function getAll(Request $request)
    {
        if ($request->input('lang') == 'en') {
            $lang = Translation::pluck('en', 'default_phrase');
        }
        if ($request->input('lang') == 'kh') {
            $lang = Translation::pluck('kh', 'default_phrase');
        }
        return $lang;
    }
}
