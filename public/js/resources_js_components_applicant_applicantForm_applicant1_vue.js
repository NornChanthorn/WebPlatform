"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_applicant_applicantForm_applicant1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: [],
      selectedMajor: null,
      selectedSt: null,
      selectedEdu: null,
      selectedLg: null,
      value1: '',
      gender: '',
      value: '',
      dis: false,
      active: false,
      checked: false,
      preview: null,
      image: null,
      preview_list: [],
      image_list: [],
      date3: null,
      major: [{
        name: 'សេដ្ធកិច្ច-ហិរញ្ញវត្ថុ'
      }, {
        name: 'រដ្ធបាលសាធារណៈ'
      }],
      studentType: [{
        name: 'និស្សិត'
      }, {
        name: 'មន្ត្រីរាជការ'
      }, {
        name: 'ព្រះសង្ឃ'
      }],
      eduLevel: [{
        name: 'បរិញ្ញាប័ត្រ'
      }, {
        name: 'បរិញ្ញាប័ត្ររង'
      }, {
        name: 'បរិញ្ញាប័ត្រជាន់ខ្ពស់'
      }, {
        name: 'បណ្ឌិត'
      }],
      language: [{
        name: 'ខ្មែរ'
      }, {
        name: 'អង់គ្លេស'
      }]
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('getUser').then(function (res) {
                console.log(res);
                _this.user = res.data;
              })["catch"](function (er) {
                console.log(er);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    previewImage: function previewImage(event) {
      var _this2 = this;

      var input = event.target;

      if (input.files) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.preview = e.target.result;
        };

        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    form2: function form2() {
      this.$router.push({
        name: 'ApplicantForm2'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=template&id=2e0880a0":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=template&id=2e0880a0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ml-12 mt-1 p-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fa fa-address-book-o fa-sm",
  style: {
    "color": "blue"
  }
}, " Applicant Form")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "w-full h-screen"
};
var _hoisted_4 = {
  "class": "ml-16 w-11/12 mt-3 mb-12"
};
var _hoisted_5 = {
  action: "",
  "class": ""
};
var _hoisted_6 = {
  "class": "columns-2 relative bg-yellow-300 w-9/12"
};
var _hoisted_7 = {
  "class": ""
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "mr-16"
}, "ជ្រើសរើសជំនាញ", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": ""
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "mr-16"
}, "ជា", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "columns-2 relative bg-yellow-300 w-9/12"
};
var _hoisted_12 = {
  "class": ""
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "mr-16"
}, "គោត្តនាមនឹងនាម", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": ""
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "mr-16"
}, "អក្សរឡាតាំង", -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "inline float-right space-x-3 mr-12 mb-12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dropdown");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("body", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown, {
    modelValue: $data.selectedMajor,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.selectedMajor = $event;
    }),
    options: $data.major,
    optionLabel: "name",
    placeholder: "ជ្រើសរើសជំនាញ",
    "class": "w-1/2"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown, {
    modelValue: $data.selectedSt,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.selectedSt = $event;
    }),
    options: $data.studentType,
    optionLabel: "name",
    placeholder: "",
    "class": "w-1/2"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    "class": "w-1/2 w-50",
    placeholder: "គោត្តនាមនឹងនាម",
    type: "text",
    modelValue: $data.user.name,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.user.name = $event;
    })
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    "class": "w-1/2 uppercase",
    placeholder: "អក្សរឡាតាំង"
  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"  \">\r\n                              <label for=\"\" class=\" w-40 \">គោត្តនាមនឹងនាម</label>\r\n                              <InputText class=\"  w-50\" placeholder=\"គោត្តនាមនឹងនាម\" type=\"text\" v-model=\"user.name\"></InputText>\r\n                           </div>\r\n                           <div class=\" \">\r\n                              <label for=\"\" class=\"w-40 \">អក្សរឡាតាំង</label>\r\n                              <InputText class=\" w-50 uppercase\" placeholder=\"អក្សរឡាតាំង\" ></InputText>\r\n                           </div>\r\n                           <div class=\"inline-flex \">\r\n                              <label for=\"\" class=\"w-40 \">ភេទ</label>\r\n                              <div>\r\n                                        <RadioButton name=\"city\" value=\"male\" v-model=\"gender\"  class=\"\"/>\r\n                                        <label for=\"\" class=\"ml-4\">ប្រុស</label>\r\n                                        <RadioButton name=\"city\" value=\"femals\" v-model=\"gender\" class=\"ml-16\"/>\r\n                                        <label for=\"\" class=\"ml-4\">ស្រី</label>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\" \">\r\n                              <label for=\"\" class=\"w-40 \">ថ្ងៃខែឆ្នាំកំណើត</label>\r\n                              <Calendar inputId=\"icon\" v-model=\"date3\" :showIcon=\"true\" />\r\n                           </div>\r\n                           <div class=\" \">\r\n                              <label for=\"\" class=\"w-40 \">សញ្ជាតិ</label>\r\n                              <InputText class=\" w-50\"></InputText>\r\n                           </div>\r\n                           <div class=\" \">\r\n                              <label for=\"\" class=\"w-40 \">អ៊ីមែល</label>\r\n                              <InputText class=\" w-50\" v-model=\"user.email\"></InputText>\r\n                           </div>\r\n                           <div class=\" \">\r\n                              <label for=\"\" class=\"w-40 \">លេខទូរស័ព្ទផ្ទាល់ខ្លួន</label>\r\n                              <InputText class=\" w-50\" type=\"telNo\"></InputText>\r\n                           </div>\r\n                           <div class=\"  \">\r\n                              <label for=\"\" class=\"w-40 \">លេខទូរស័ព្ទប្រើតេលេក្រាម</label>\r\n                              <InputText class=\" w-50\" placeholder=\"XXX XXX XXX\"></InputText>\r\n                           </div>\r\n                           <div class=\"  \">\r\n                              <label for=\"\" class=\"w-40 \">មុខជំនាញឯកទេស</label>\r\n                              <InputText class=\" w-50\" placeholder=\"មុខជំនាញឯកទេស\"></InputText>\r\n                           </div>\r\n                           <div class=\"\">\r\n                              <label for=\"\" class=\"w-40 \">លេខអត្តសញ្ញាណ​ប័ណ្ណឬឆាយា</label>\r\n                              <InputText class=\" w-50 \" type=\"text\" placeholder=\"xxx xxx xxx xxx\"></InputText>\r\n                           </div>\r\n                           <div class=\"\">\r\n                              <label for=\"\" class=\"w-40 \">ជ្រើសរើសភាសាប្រលង</label>\r\n                              <dropdown v-model=\"selectedLg\" :options=\"language\" optionLabel=\"name\" placeholder=\"\" class=\"w-50\"/>\r\n                           </div>\r\n                           <div class=\"\">\r\n\r\n                           </div>\r\n                           \r\n                           <div class=\"\">\r\n                              <label for=\"\" class=\"w-40 \">គ្រីះស្ថានសិក្សា</label>\r\n                              <InputText class=\" w-50\" type=\"text\" placeholder=\"\"></InputText>\r\n                           </div>\r\n                           <div class=\"\">\r\n                              <label for=\"\" class=\"w-40 \">កម្រិតវប្បធម៍</label>\r\n                              <dropdown v-model=\"selectedEdu\" :options=\"eduLevel\" optionLabel=\"name\" placeholder=\"\" class=\"w-50\"/>\r\n                           </div>\r\n                           <div class=\"\">\r\n                              <label for=\"here\" class=\"w-40\">ពិការភាព </label>   \r\n                              <CheckBox   class=\"lg\" @click=\"active= !active\" v-model=\"checked\" value=\"value\"/>    \r\n                           </div>\r\n                           <div>\r\n                              <div class=\"\" id=\"here\" v-show=\"active\" >\r\n                                 <label for=\"\" class=\"w-40 \">ពណ៍នាពិការភាព</label>\r\n                                 <InputText class=\" w-50\"  type=\"text\" placeholder=\"\"></InputText>\r\n                              </div>\r\n                           </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Place birth "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"\">\r\n                              <h3 class=\"font-bold text-xl relative  \">ទីកន្លែងកំណើត</h3>\r\n                                 <div class=\"border p-3 rounded\">\r\n                                    <label for=\"\" class=\"w-36\">ខេត្ត/ក្រុង</label>\r\n                                    <InputText class=\"w-60\"></InputText>\r\n                                    <br><br>\r\n                                    <label for=\"\" class=\"w-36\">ស្រុក/ខណ្ឌ</label>\r\n                                    <InputText class=\"w-60\"></InputText>\r\n                                    <br><br>\r\n                                    <label for=\"\" class=\"w-36\">ឃុំ/សង្កាត់</label>\r\n                                    <InputText class=\"w-60\"></InputText>\r\n                                    <br><br>\r\n                                    <label for=\"\" class=\"w-36\">ភូមិ</label>\r\n                                    <InputText class=\"w-60\"></InputText>\r\n                                 </div>                 \r\n                          </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" uplaod image  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-md-5 offset-md-5 mt-7 ml-40\">\r\n                                 <div class=\"form-group border text-center bg-red-200 h-4/5  \">\r\n                                    <div class=\"border bg-neutral-300 text-center p-2 h-full w-full\">\r\n                                       <template v-if=\"preview\" >\r\n                                       <img :src=\"preview\" class=\"bg-red-300 p-0 ml-4 text-center \" style=\"width: 150px;\"/>                \r\n                                       <p class=\"mb-0\">size: {{ image.size/1024 }}KB</p>\r\n                                       </template>\r\n                                    </div>\r\n                                    <label for=\"my-file\"></label> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"file\" accept=\"image/*\" @change=\"previewImage\" class=\"form-control-file w-50 \" id=\"my-file\" > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"file\" accept=\"image/*\" @change=\"previewImage\" class=\"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 \" id=\"my-file\">           \r\n                                 </div>                                 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div>                    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </form> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "p-button-secondary",
    disabled: "disabled"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ថយក្រោយ")];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "p-button-success",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.form2();
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("រក្សាទុកនឹងទៅមុខ")];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.form2();
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ទៅមុខ")];
    }),
    _: 1
    /* STABLE */

  })])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* label{\r\n      font-size: 17px;\r\n    } */\n.step{\r\n      padding-right: 120px;\r\n      padding-top: 10px;\n}\n.step::after{\r\n      background: orange;\n}\r\n \r\n    \r\n   \r\n   ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_applicant1_vue_vue_type_style_index_0_id_2e0880a0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_applicant1_vue_vue_type_style_index_0_id_2e0880a0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_applicant1_vue_vue_type_style_index_0_id_2e0880a0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/applicant/applicantForm/applicant1.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/applicant/applicantForm/applicant1.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _applicant1_vue_vue_type_template_id_2e0880a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicant1.vue?vue&type=template&id=2e0880a0 */ "./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=template&id=2e0880a0");
/* harmony import */ var _applicant1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applicant1.vue?vue&type=script&lang=js */ "./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=script&lang=js");
/* harmony import */ var _applicant1_vue_vue_type_style_index_0_id_2e0880a0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css */ "./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css");
/* harmony import */ var C_Laravel_mix_Project_Merge_webregister_web_registration_2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Laravel_mix_Project_Merge_webregister_web_registration_2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_applicant1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_applicant1_vue_vue_type_template_id_2e0880a0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/applicant/applicantForm/applicant1.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_applicant1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_applicant1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./applicant1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=template&id=2e0880a0":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=template&id=2e0880a0 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_applicant1_vue_vue_type_template_id_2e0880a0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_applicant1_vue_vue_type_template_id_2e0880a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./applicant1.vue?vue&type=template&id=2e0880a0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=template&id=2e0880a0");


/***/ }),

/***/ "./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_applicant1_vue_vue_type_style_index_0_id_2e0880a0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/applicant/applicantForm/applicant1.vue?vue&type=style&index=0&id=2e0880a0&lang=css");


/***/ })

}]);