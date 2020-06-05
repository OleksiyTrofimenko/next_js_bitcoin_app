webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/cegla/Projects/next-js-app/components/Prices.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD',\n      filteredValues: [],\n      filterOptions: [8000, 9000, 10000],\n      errorMessage: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onSelect\", function (e) {\n      var bpiList = _this.props.bpiList;\n      var value = e.target.value;\n\n      if (!value) {\n        return _this.setState({\n          filteredValues: [],\n          errorMessage: ''\n        });\n      }\n\n      var filteredValues = bpiList.filter(function (item) {\n        return item <= Number(value);\n      });\n\n      if (!filteredValues.length) {\n        return _this.setState({\n          errorMessage: 'No matches'\n        });\n      }\n\n      return _this.setState({\n        filteredValues: filteredValues,\n        errorMessage: ''\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderFilters\", function () {\n      var bpiList = _this.props.bpiList;\n      var _this$state = _this.state,\n          filterOptions = _this$state.filterOptions,\n          filteredValues = _this$state.filteredValues,\n          errorMessage = _this$state.errorMessage;\n\n      if (errorMessage) {\n        return __jsx(\"div\", {\n          className: \"alert alert-warning\",\n          role: \"alert\",\n          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 9\n          }\n        }, errorMessage);\n      }\n\n      if (filteredValues.length) {\n        return filteredValues.map(function (bpi) {\n          return __jsx(\"li\", {\n            className: \"list-group-item\",\n            key: bpi,\n            __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 9\n            }\n          }, bpi);\n        });\n      }\n\n      return bpiList.map(function (bpi) {\n        return __jsx(\"li\", {\n          className: \"list-group-item\",\n          key: bpi,\n          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 7\n          }\n        }, bpi);\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var bpiList = this.props.bpiList;\n      var _this$state2 = this.state,\n          filterOptions = _this$state2.filterOptions,\n          filteredValues = _this$state2.filteredValues,\n          errorMessage = _this$state2.errorMessage;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 7\n        }\n      }, __jsx(\"select\", {\n        className: \"custom-select\",\n        onChange: this.onSelect,\n        style: {\n          marginBottom: '1rem'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }\n      }, __jsx(\"option\", {\n        value: \"all\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }\n      }, \"All\"), filterOptions.map(function (option) {\n        return __jsx(\"option\", {\n          key: option,\n          value: option,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }\n        }, \"Less then \".concat(option));\n      })), this.renderFilters());\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwiZmlsdGVyZWRWYWx1ZXMiLCJmaWx0ZXJPcHRpb25zIiwiZXJyb3JNZXNzYWdlIiwiZSIsImJwaUxpc3QiLCJwcm9wcyIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJpdGVtIiwiTnVtYmVyIiwibGVuZ3RoIiwic3RhdGUiLCJtYXAiLCJicGkiLCJvblNlbGVjdCIsIm1hcmdpbkJvdHRvbSIsIm9wdGlvbiIsInJlbmRlckZpbHRlcnMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGNBQVEsRUFBRSxLQURKO0FBRU5DLG9CQUFjLEVBQUUsRUFGVjtBQUdOQyxtQkFBYSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBSFQ7QUFJTkMsa0JBQVksRUFBRTtBQUpSLEs7O21OQU9HLFVBQUNDLENBQUQsRUFBTztBQUFBLFVBQ1JDLE9BRFEsR0FDSSxNQUFLQyxLQURULENBQ1JELE9BRFE7QUFFaEIsVUFBTUUsS0FBSyxHQUFHSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsS0FBdkI7O0FBRUEsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVixlQUFPLE1BQUtFLFFBQUwsQ0FBYztBQUNuQlIsd0JBQWMsRUFBRSxFQURHO0FBRW5CRSxzQkFBWSxFQUFFO0FBRkssU0FBZCxDQUFQO0FBSUQ7O0FBRUQsVUFBTUYsY0FBYyxHQUFHSSxPQUFPLENBQUNLLE1BQVIsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxJQUFJQyxNQUFNLENBQUNMLEtBQUQsQ0FBeEI7QUFBQSxPQUFmLENBQXZCOztBQUVBLFVBQUksQ0FBQ04sY0FBYyxDQUFDWSxNQUFwQixFQUE0QjtBQUMxQixlQUFPLE1BQUtKLFFBQUwsQ0FBYztBQUNuQk4sc0JBQVksRUFBRTtBQURLLFNBQWQsQ0FBUDtBQUdEOztBQUVELGFBQU8sTUFBS00sUUFBTCxDQUFjO0FBQ25CUixzQkFBYyxFQUFkQSxjQURtQjtBQUVuQkUsb0JBQVksRUFBRTtBQUZLLE9BQWQsQ0FBUDtBQUlELEs7O3dOQUVlLFlBQU07QUFBQSxVQUNaRSxPQURZLEdBQ0EsTUFBS0MsS0FETCxDQUNaRCxPQURZO0FBQUEsd0JBRW9DLE1BQUtTLEtBRnpDO0FBQUEsVUFFWlosYUFGWSxlQUVaQSxhQUZZO0FBQUEsVUFFR0QsY0FGSCxlQUVHQSxjQUZIO0FBQUEsVUFFbUJFLFlBRm5CLGVBRW1CQSxZQUZuQjs7QUFJcEIsVUFBSUEsWUFBSixFQUFrQjtBQUNoQixlQUNFO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFxQyxjQUFJLEVBQUMsT0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHQSxZQURILENBREY7QUFLRDs7QUFFRCxVQUFJRixjQUFjLENBQUNZLE1BQW5CLEVBQTJCO0FBQ3pCLGVBQU9aLGNBQWMsQ0FBQ2MsR0FBZixDQUFtQixVQUFDQyxHQUFEO0FBQUEsaUJBQ3hCO0FBQUkscUJBQVMsRUFBQyxpQkFBZDtBQUFnQyxlQUFHLEVBQUVBLEdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDR0EsR0FESCxDQUR3QjtBQUFBLFNBQW5CLENBQVA7QUFLRDs7QUFFRCxhQUFPWCxPQUFPLENBQUNVLEdBQVIsQ0FBWSxVQUFDQyxHQUFEO0FBQUEsZUFDakI7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQWdDLGFBQUcsRUFBRUEsR0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHQSxHQURILENBRGlCO0FBQUEsT0FBWixDQUFQO0FBS0QsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NYLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREO0FBQUEseUJBRWlELEtBQUtTLEtBRnREO0FBQUEsVUFFQ1osYUFGRCxnQkFFQ0EsYUFGRDtBQUFBLFVBRWdCRCxjQUZoQixnQkFFZ0JBLGNBRmhCO0FBQUEsVUFFZ0NFLFlBRmhDLGdCQUVnQ0EsWUFGaEM7QUFJUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGlCQUFTLEVBQUMsZUFEWjtBQUVFLGdCQUFRLEVBQUUsS0FBS2MsUUFGakI7QUFHRSxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQixTQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRTtBQUFRLGFBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQU1HaEIsYUFBYSxDQUFDYSxHQUFkLENBQWtCLFVBQUNJLE1BQUQ7QUFBQSxlQUNqQjtBQUFRLGFBQUcsRUFBRUEsTUFBYjtBQUFxQixlQUFLLEVBQUVBLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQWtEQSxNQUFsRCxFQURpQjtBQUFBLE9BQWxCLENBTkgsQ0FERixFQVdHLEtBQUtDLGFBQUwsRUFYSCxDQURGO0FBZUQ7Ozs7RUEvRWtCQyw0Q0FBSyxDQUFDQyxTOztBQWtGWnZCLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QcmljZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgZmlsdGVyZWRWYWx1ZXM6IFtdLFxuICAgIGZpbHRlck9wdGlvbnM6IFs4MDAwLCA5MDAwLCAxMDAwMF0sXG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgfTtcblxuICBvblNlbGVjdCA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBicGlMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpbHRlcmVkVmFsdWVzOiBbXSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkVmFsdWVzID0gYnBpTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPD0gTnVtYmVyKHZhbHVlKSk7XG5cbiAgICBpZiAoIWZpbHRlcmVkVmFsdWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvck1lc3NhZ2U6ICdObyBtYXRjaGVzJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbHRlcmVkVmFsdWVzLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXJGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYnBpTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZpbHRlck9wdGlvbnMsIGZpbHRlcmVkVmFsdWVzLCBlcnJvck1lc3NhZ2UgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcmVkVmFsdWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZpbHRlcmVkVmFsdWVzLm1hcCgoYnBpKSA9PiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2JwaX0+XG4gICAgICAgICAge2JwaX1cbiAgICAgICAgPC9saT5cbiAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiBicGlMaXN0Lm1hcCgoYnBpKSA9PiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXticGl9PlxuICAgICAgICB7YnBpfVxuICAgICAgPC9saT5cbiAgICApKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBicGlMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZmlsdGVyT3B0aW9ucywgZmlsdGVyZWRWYWx1ZXMsIGVycm9yTWVzc2FnZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3R9XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMXJlbScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICB7ZmlsdGVyT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+e2BMZXNzIHRoZW4gJHtvcHRpb259YH08L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHt0aGlzLnJlbmRlckZpbHRlcnMoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})