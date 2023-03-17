"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Modules_User_PreviewApplicantForm_Components_form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: []
    };
  },
  created: function created() {
    this.getUser();
  },
  methods: {
    printOut: function printOut() {
      axios.get('/api/printPDF', {
        responseType: 'blob'
      }).then(function (res) {
        var fileURL = window.URL.createObjectURL(new Blob([res.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'file.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    PrintPDF: function PrintPDF() {
      axios.get('/api/printPDF', {
        responseType: 'arraybuffer'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'form.pdf';
        link.click();
      });
    },
    getUser: function getUser() {
      var _this = this;

      axios.get('/api/getUser').then(function (res) {
        _this.user = res.data;
        console.log(res);
      })["catch"](function (er) {
        console.log(er);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=template&id=d8b8412c":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=template&id=d8b8412c ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "ml-2 w-11/12 h-auto",
  id: "form"
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ជ្រើសយកជំនាញ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ជា </label><p></p></div></div>", 1);

var _hoisted_7 = {
  "class": "columns-2 lg:ml-6 mt-5"
};
var _hoisted_8 = {
  "class": "flex"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-1/2"
}, "គោត្តនាម និងនាម ", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "flex"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-1/2"
}, "អក្សរពុម្ពឡាតាំង ", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "columns-2 lg:ml-6 mt-5"
};
var _hoisted_13 = {
  "class": "flex"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-1/2"
}, "ភេទ ", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-1/2"
}, "ថ្ងៃខែឆ្នាំកំណើត ", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "columns-2 lg:ml-6 mt-5"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-1/2"
}, "សញ្ជាតិ "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "ខ្មែរ")], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "flex"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-1/2"
}, "អុីមែល ", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "columns-2 lg:ml-6 mt-5"
};
var _hoisted_22 = {
  "class": "flex"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-1/2"
}, "លេខទូរស័ព្ទផ្ទាល់ខ្លួន ", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-1/2"
}, "លេខទូរស័ព្ទ​(Telegram) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p")], -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">មុខជំនាញឯកទេស</label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">លេខអត្តសញ្ញាណ​ប័ណ្ណឬឆាយា</label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ភាសាប្រលង</label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កម្រិតវប្បធម៏ </label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">គ្រឹះស្ថានសិក្សា</label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កម្រិតវប្បធម៏ទូទៅ </label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ពិការភាព </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ការពិពណ៍នាពិការភាព </label><p></p></div></div>", 4);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"lg:ml-6 mt-5\">ទីកន្លែងកំណើត​ : </div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កើតនៅភូមិ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឃុំ/សង្កាត់</label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រុក/ខណ្ឌ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">រាជធានី/ខេត្ត </label><p></p></div></div>", 3);

var _hoisted_32 = {
  "class": "flex mt-5"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "ទំនាក់ទំនង", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"lg:ml-6 mt-4\">អាសយដ្ធានបច្ចុប្បន្ន​ : </div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ផ្ទះ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ផ្លូវ </label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កើតនៅភូមិ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឃុំ/សង្កាត់</label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រុក/ខណ្ឌ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">រាជធានី/ខេត្ត </label><p></p></div></div><div class=\"lg:ml-6 mt-4\">អ្នកដែលទាក់ទងបាននៅភ្នំពេញ: </div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឈ្មោះ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ត្រូវជាអ្វីនឹងអ្នក </label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ទីកន្លែងធ្វើការ/ផ្ទះ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">លេខទូរស័ព្ទ </label><p></p></div></div>", 7);

var _hoisted_41 = {
  "class": "flex mt-5"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "អំពីក្រុមគ្រួសារ", -1
/* HOISTED */
);

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ព័ត៌មានគ្រួសារ </label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ប្តីរឺប្រពន្ធឈ្មោះ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ថ្ងៃខែឆ្នាំកំណើត </label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ទីកន្លែងកំណើត​ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រុក/ខណ្ឌ </label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឃុំ/សង្កាត់</label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ភូមិ</label><p></p></div></div><div class=\"columns-2 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កម្រិតវប្បធម៏</label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">មុខរបរ</label><p></p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">កូនចំនួន</label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រី</label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ប្រុស</label><p></p></div></div>", 6);

var _hoisted_49 = {
  "class": "flex mt-5"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-96 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "អំពីឪពុកម្តាយនឹងបងប្អូនបង្កើត", -1
/* HOISTED */
);

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឪពុកឈ្មោះ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឆ្នាំកំណើត </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្ថានភាព </label><p></p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">មុខរបរសព្វថ្ងៃ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">អាសយដ្ធានបច្ចុប្បន្ន​ </label><p class=\"ml-6\"></p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ម្តាយឈ្មោះ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ឆ្នាំកំណើត </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្ថានភាព </label><p></p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">មុខរបរសព្វថ្ងៃ </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">អាសយដ្ធានបច្ចុប្បន្ន​ </label><p class=\"ml-6\"></p></div></div><div class=\"columns-3 lg:ml-6 mt-5\"><div class=\"flex\"><label for=\"\" class=\"w-1/2\">បងប្អូនចំនួន </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ស្រី </label><p></p></div><div class=\"flex\"><label for=\"\" class=\"w-1/2\">ប្រុស </label><p></p></div></div>", 5);

var _hoisted_56 = {
  "class": "flex mt-5"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold"
}, "ប្រវត្តិការងារ", -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "flex mt-5"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-1 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 font-bold sm:text-sm lg:text-xl"
}, "ឯកសារភ្ជាប់", -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "columns-2 lg:ml-6 mt-5"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "w-77"
}, "អត្តសញ្ញាណប័ត្រ​ រឺ​ឆាយាសង្ឃ​ (ព្រះសង្ឃ)")], -1
/* HOISTED */
);

var _hoisted_62 = {
  "class": "flex"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex xl:ml-44 lg:ml-16 md:ml-12 sm:ml-6 mt-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "material-symbols-outlined bg-red-300"
}, "done"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "ខ្ញុំបាទ/នាងខ្ញុំសូមធានាទទួលខុសត្រូវចំពោះមុខច្បាប់ថាព័ត៍មានដែលបំពេញខាងលើនេះត្រឹមត្រូវប្រាកដមែន")], -1
/* HOISTED */
);

var _hoisted_64 = {
  "class": "flex lg:w-1/2 lg:justify-between md:justify-between md:w-1/2 xl:justify-between xl:w-1/2 lg:ml-36 md:ml-44 xl:ml-56 mt-4 sm:justify-between sm:w-1/2 sm:ml-32 justify-between w-9/12 ml-12 mb-16"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_divider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("divider");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("body", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mt-1 p-0 ml-12\">\r\n        <span class=\"pi pi-file\" style=\"color: blue\">  Preview Application form </span>\r\n    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.kh_name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.name), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.gender), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.dob), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.email), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" --------------------------------------------------- "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.phone_number), 1
  /* TEXT */
  )]), _hoisted_24]), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ________________________________ទីកន្លែងកំណើត_________________________________ "), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" _____________________________ទំនាក់ទំនង_______________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" _________________________________អំពីក្រុមគ្រួសារ_______________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ____________________________________អំពីឪពុកម្តាយនឹងបងប្អូនបង្កើត__________________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ________________________________Job history_____________________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
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
  , ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ________________________________Attachment_____________________________________________ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "មើល",
    "class": "p-button-warning text-white"
  })])]), _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "ដាក់ស្នើរ"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "បោះពុម្ភ",
    "class": "p-button-success",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.PrintPDF();
    })
  })])])])]);
}

/***/ }),

/***/ "./Modules/User/PreviewApplicantForm/Components/form.vue":
/*!***************************************************************!*\
  !*** ./Modules/User/PreviewApplicantForm/Components/form.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_d8b8412c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=d8b8412c */ "./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=template&id=d8b8412c");
/* harmony import */ var _form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js */ "./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=script&lang=js");
/* harmony import */ var C_Laravel_mix_Project_Merge_webregister_finalUpdate_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Laravel_mix_Project_Merge_webregister_finalUpdate_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_form_vue_vue_type_template_id_d8b8412c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"Modules/User/PreviewApplicantForm/Components/form.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./form.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=template&id=d8b8412c":
/*!*********************************************************************************************!*\
  !*** ./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=template&id=d8b8412c ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_template_id_d8b8412c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_template_id_d8b8412c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./form.vue?vue&type=template&id=d8b8412c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modules/User/PreviewApplicantForm/Components/form.vue?vue&type=template&id=d8b8412c");


/***/ })

}]);