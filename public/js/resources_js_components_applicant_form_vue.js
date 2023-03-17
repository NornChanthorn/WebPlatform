"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_applicant_form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/form.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/form.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.mjs");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../i18n */ "./resources/js/i18n.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

    var _useI18n = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_3__.useI18n)({
      useScope: 'global'
    }),
        locale = _useI18n.locale;

    var currentLocale = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(locale.value);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(router.currentRoute, function (route) {
      currentLocale.value = route.params.locale;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(currentLocale, function (val) {
      router.push({
        name: router.currentRoute.value.name,
        params: {
          locale: val
        }
      });
    });
    return {
      locale: locale,
      currentLocale: currentLocale,
      supportLocales: _i18n__WEBPACK_IMPORTED_MODULE_1__.SUPPORT_LOCALES
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/form.vue?vue&type=template&id=3bbc8388":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/form.vue?vue&type=template&id=3bbc8388 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "ml-2 w-11/12 h-auto"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex mt-4\"><div class=\"w-9/12 p-3\"><div class=\"text-center\"><h5>ព្រះរាជាណាចក្រកម្ពុជា</h5><h5>ជាតិ សាសនា ព្រះមហាក្សត្ស</h5></div></div><div class=\"p-3\"><img class=\"border border-blue-300 lg:w-52 md:w-32 sm:w-24 w-24\" src=\"https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg\" alt=\"\"></div></div>", 1);

var _hoisted_3 = {
  "class": "ml-9"
};
var _hoisted_4 = {
  "class": "flex"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "ព័ត៌មានផ្ទាល់ខ្លួន", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ជ្រើសយកជំនាញ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ជា </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">គោត្តនាម និងនាម </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">អក្សរពុម្ពឡាតាំង </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ភេទ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ថ្ងៃខែឆ្នាំកំណើត </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">សញ្ជាតិ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">អុីមែល </label><p>Infor</p></div></div>", 4);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">លេខទូរស័ព្ទផ្ទាល់ខ្លួន </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">លេខទូរស័ព្ទ​(Telegram) </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">មុខជំនាញឯកទេស</label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">លេខអត្តសញ្ញាណ​ប័ណ្ណឬឆាយា</label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ភាសាប្រលង</label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កម្រិតវប្បធម៏ </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">គ្រឹស្ថានសិក្សា</label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កម្រិតវប្បធម៏ទូទៅ </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ពិការភាព </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ការពិពណ៍នាពិការភាព </label><p>Infor</p></div></div>", 5);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"lg:ml-6 mt-5\">ទីកន្លែងកំណើត​ : </div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កើតនៅភូមិ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឃុំ/សង្កាត់</label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រុក/ខណ្ឌ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">រាជធានី/ខេត្ត </label><p>Infor</p></div></div>", 3);

var _hoisted_18 = {
  "class": "flex mt-5"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "ទំនាក់ទំនង", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"lg:ml-6 mt-4\">អាសយដ្ធានបច្ចុប្បន្ន​ : </div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ផ្ទះ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ផ្លូវ </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កើតនៅភូមិ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឃុំ/សង្កាត់</label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រុក/ខណ្ឌ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">រាជធានី/ខេត្ត </label><p>Infor</p></div></div><div class=\"lg:ml-6 mt-4\">អ្នកដែលទាក់ទងបាននៅភ្នំពេញ: </div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឈ្មោះ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ត្រូវជាអ្វីនឹងអ្នក </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ទីកន្លែងធ្វើការ/ផ្ទះ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">លេខទូរស័ព្ទ </label><p>Infor</p></div></div>", 7);

var _hoisted_27 = {
  "class": "flex mt-5"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "អំពីក្រុមគ្រួសារ", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ព័ត៌មានគ្រួសារ </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ប្តីរឺប្រពន្ធឈ្មោះ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ថ្ងៃខែឆ្នាំកំណើត </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ទីកន្លែងកំណើត​ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រុក/ខណ្ឌ </label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឃុំ/សង្កាត់</label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ភូមិ</label><p>Infor</p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កម្រិតវប្បធម៏</label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">មុខរបរ</label><p>Infor</p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កូនចំនួន</label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រី</label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ប្រុស</label><p>Infor</p></div></div>", 6);

var _hoisted_35 = {
  "class": "flex mt-5"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-96 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "អំពីឪពុកម្តាយនឹងបងប្អូនបង្កើត", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឪពុកឈ្មោះ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឆ្នាំកំណើត </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្ថានភាព </label><p>Infor</p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">មុខរបរសព្វថ្ងៃ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">អាសយដ្ធានបច្ចុប្បន្ន​ </label><p class=\"ml-6\">Infor</p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ម្តាយឈ្មោះ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឆ្នាំកំណើត </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្ថានភាព </label><p>Infor</p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">មុខរបរសព្វថ្ងៃ </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">អាសយដ្ធានបច្ចុប្បន្ន​ </label><p class=\"ml-6\">Infor</p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">បងប្អូនចំនួន </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រី </label><p>Infor</p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ប្រុស </label><p>Infor</p></div></div>", 5);

var _hoisted_42 = {
  "class": "flex mt-5"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "ប្រវត្តិការងារ", -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "flex mt-5"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-1 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 font-bold sm:text-sm lg:text-xl"
}, "ឯកសារភ្ជាប់", -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "columns-2 lg:ml-6 mt-5"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-77"
}, "អត្តសញ្ញាណប័ត្រ​ រឺ​ឆាយាសង្ឃ​ (ព្រះសង្ឃ)")], -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "flex"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex xl:ml-44 lg:ml-16 md:ml-12 sm:ml-6 mt-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "material-symbols-outlined bg-red-300"
}, "done"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "ខ្ញុំបាទ/នាងខ្ញុំសូមធានាទទួលខុសត្រូវចំពោះមុខច្បាប់ថាព័ត៍មានដែលបំពេញខាងលើនេះត្រឹមត្រូវប្រាកដមែន")], -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "flex lg:w-1/2 lg:justify-between md:justify-between md:w-1/2 xl:justify-between xl:w-1/2 lg:ml-36 md:ml-44 xl:ml-56 mt-4 sm:justify-between sm:w-1/2 sm:ml-32 justify-between w-9/12 ml-12 mb-16"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_divider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("divider");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("body", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mt-1 p-0 ml-12\">\r\n        <span class=\"pi pi-file\" style=\"color: blue\">  Preview Application form </span>\r\n    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" --------------------------------------------------- "), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ________________________________ទីកន្លែងកំណើត_________________________________ "), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" _____________________________ទំនាក់ទំនង_______________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" _________________________________អំពីក្រុមគ្រួសារ_______________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ____________________________________អំពីឪពុកម្តាយនឹងបងប្អូនបង្កើត__________________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ________________________________Job history_____________________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: _ctx.work_history,
    responsiveLayout: "scroll"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "id",
        header: "ថ្ងៃខែឆ្នាំបំពេញការងារ"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "ថ្ងៃខែឆ្នាំបញ្ចប់ការងារ"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "category",
        header: "អង្គភាព-ក្រសួង-ស្ថាប័ន"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "quantity",
        header: "មុខដំណែង"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "quantity",
        header: "ខេត្ត/រាជធានី"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ________________________________Attachment_____________________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "មើល",
    "class": "p-button-warning text-white"
  })])]), _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "ដាក់ស្នើរ"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "បោះពុម្ភ",
    "class": "p-button-success"
  })])])])]);
}

/***/ }),

/***/ "./resources/js/components/applicant/form.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/applicant/form.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_3bbc8388__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=3bbc8388 */ "./resources/js/components/applicant/form.vue?vue&type=template&id=3bbc8388");
/* harmony import */ var _form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js */ "./resources/js/components/applicant/form.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_LCB_OneDrive_Documents_web_registration_1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_LCB_OneDrive_Documents_web_registration_1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_form_vue_vue_type_template_id_3bbc8388__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/applicant/form.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/applicant/form.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/applicant/form.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./form.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/form.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/applicant/form.vue?vue&type=template&id=3bbc8388":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/applicant/form.vue?vue&type=template&id=3bbc8388 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_template_id_3bbc8388__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_template_id_3bbc8388__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./form.vue?vue&type=template&id=3bbc8388 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/form.vue?vue&type=template&id=3bbc8388");


/***/ })

}]);