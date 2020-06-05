webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/cegla/Projects/next-js-app/components/Prices.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD',\n      filteredValues: [],\n      filterOptions: [8000, 9000, 10000]\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onSelect\", function (e) {\n      var bpiList = _this.props.bpiList;\n      var value = e.target.value;\n\n      if (!value) {\n        return _this.setState({\n          filteredValues: []\n        });\n      }\n\n      var filtered = bpiList.filter(function (item) {\n        return item <= value;\n      });\n      console.log(filtered);\n      console.log(bpiList);\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var bpiList = this.props.bpiList;\n      var _this$state = this.state,\n          filterOptions = _this$state.filterOptions,\n          filteredValues = _this$state.filteredValues;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 7\n        }\n      }, __jsx(\"select\", {\n        className: \"custom-select\",\n        onChange: this.onSelect,\n        style: {\n          marginBottom: '1rem'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }\n      }, __jsx(\"option\", {\n        value: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }\n      }, \"Select value\"), filterOptions.map(function (option) {\n        return __jsx(\"option\", {\n          key: option,\n          value: option,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }\n        }, \"Less then \".concat(option));\n      })), __jsx(\"ul\", {\n        className: \"list-group\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      }, bpiList && bpiList.map(function (bpi) {\n        return __jsx(\"li\", {\n          className: \"list-group-item\",\n          key: bpi,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }\n        }, bpi);\n      })));\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwiZmlsdGVyZWRWYWx1ZXMiLCJmaWx0ZXJPcHRpb25zIiwiZSIsImJwaUxpc3QiLCJwcm9wcyIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJvblNlbGVjdCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsIm9wdGlvbiIsImJwaSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEtBREo7QUFFTkMsb0JBQWMsRUFBRSxFQUZWO0FBR05DLG1CQUFhLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWI7QUFIVCxLOzttTkFNRyxVQUFDQyxDQUFELEVBQU87QUFBQSxVQUNSQyxPQURRLEdBQ0ksTUFBS0MsS0FEVCxDQUNSRCxPQURRO0FBRWhCLFVBQU1FLEtBQUssR0FBR0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNELEtBQXZCOztBQUVBLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1YsZUFBTyxNQUFLRSxRQUFMLENBQWM7QUFDbkJQLHdCQUFjLEVBQUU7QUFERyxTQUFkLENBQVA7QUFHRDs7QUFFRCxVQUFNUSxRQUFRLEdBQUdMLE9BQU8sQ0FBQ00sTUFBUixDQUFlLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLElBQUlMLEtBQWxCO0FBQUEsT0FBZixDQUFqQjtBQUVBTSxhQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWVQsT0FBWjtBQUNELEs7Ozs7Ozs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDQSxPQURELEdBQ2EsS0FBS0MsS0FEbEIsQ0FDQ0QsT0FERDtBQUFBLHdCQUVtQyxLQUFLVSxLQUZ4QztBQUFBLFVBRUNaLGFBRkQsZUFFQ0EsYUFGRDtBQUFBLFVBRWdCRCxjQUZoQixlQUVnQkEsY0FGaEI7QUFJUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGlCQUFTLEVBQUMsZUFEWjtBQUVFLGdCQUFRLEVBQUUsS0FBS2MsUUFGakI7QUFHRSxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQixTQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRTtBQUFRLGFBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEYsRUFNR2QsYUFBYSxDQUFDZSxHQUFkLENBQWtCLFVBQUNDLE1BQUQ7QUFBQSxlQUNqQjtBQUFRLGFBQUcsRUFBRUEsTUFBYjtBQUFxQixlQUFLLEVBQUVBLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQWtEQSxNQUFsRCxFQURpQjtBQUFBLE9BQWxCLENBTkgsQ0FERixFQVdFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR2QsT0FBTyxJQUNOQSxPQUFPLENBQUNhLEdBQVIsQ0FBWSxVQUFDRSxHQUFEO0FBQUEsZUFDVjtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBZ0MsYUFBRyxFQUFFQSxHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dBLEdBREgsQ0FEVTtBQUFBLE9BQVosQ0FGSixDQVhGLENBREY7QUFzQkQ7Ozs7RUFqRGtCQyw0Q0FBSyxDQUFDQyxTOztBQW9EWnRCLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QcmljZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgZmlsdGVyZWRWYWx1ZXM6IFtdLFxuICAgIGZpbHRlck9wdGlvbnM6IFs4MDAwLCA5MDAwLCAxMDAwMF0sXG4gIH07XG5cbiAgb25TZWxlY3QgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgYnBpTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaWx0ZXJlZFZhbHVlczogW10sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZCA9IGJwaUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtIDw9IHZhbHVlKTtcblxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkKTtcbiAgICBjb25zb2xlLmxvZyhicGlMaXN0KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBicGlMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZmlsdGVyT3B0aW9ucywgZmlsdGVyZWRWYWx1ZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0fVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzFyZW0nIH19XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IHZhbHVlPC9vcHRpb24+XG4gICAgICAgICAge2ZpbHRlck9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PntgTGVzcyB0aGVuICR7b3B0aW9ufWB9PC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgIHticGlMaXN0ICYmXG4gICAgICAgICAgICBicGlMaXN0Lm1hcCgoYnBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2JwaX0+XG4gICAgICAgICAgICAgICAge2JwaX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})