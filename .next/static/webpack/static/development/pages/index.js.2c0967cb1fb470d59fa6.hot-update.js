webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/cegla/Projects/next-js-app/components/Prices.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD',\n      filteredValues: [],\n      filterOptions: [8000, 9000, 10000],\n      errorMessage: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onSelect\", function (e) {\n      var bpiList = _this.props.bpiList;\n      var value = e.target.value;\n\n      if (!value) {\n        return _this.setState({\n          filteredValues: [],\n          errorMessage: ''\n        });\n      }\n\n      var filteredValues = bpiList.filter(function (item) {\n        return item <= Number(value);\n      });\n\n      if (!filteredValues.length) {\n        return _this.setState({\n          errorMessage: 'No matches'\n        });\n      }\n\n      return _this.setState({\n        filteredValues: filteredValues,\n        errorMessage: ''\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderFilters\", function () {});\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var bpiList = this.props.bpiList;\n      var _this$state = this.state,\n          filterOptions = _this$state.filterOptions,\n          filteredValues = _this$state.filteredValues,\n          errorMessage = _this$state.errorMessage;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 7\n        }\n      }, __jsx(\"select\", {\n        className: \"custom-select\",\n        onChange: this.onSelect,\n        style: {\n          marginBottom: '1rem'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }\n      }, __jsx(\"option\", {\n        value: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }\n      }, \"Select value\"), filterOptions.map(function (option) {\n        return __jsx(\"option\", {\n          key: option,\n          value: option,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }\n        }, \"Less then \".concat(option));\n      })), errorMessage ? __jsx(\"div\", {\n        className: \"alert alert-warning\",\n        role: \"alert\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }\n      }, errorMessage) : __jsx(\"ul\", {\n        className: \"list-group\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }\n      }, filteredValues.length ? filteredValues.map(function (bpi) {\n        return __jsx(\"li\", {\n          className: \"list-group-item\",\n          key: bpi,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 19\n          }\n        }, bpi);\n      }) : bpiList.map(function (bpi) {\n        return __jsx(\"li\", {\n          className: \"list-group-item\",\n          key: bpi,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 19\n          }\n        }, bpi);\n      })));\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwiZmlsdGVyZWRWYWx1ZXMiLCJmaWx0ZXJPcHRpb25zIiwiZXJyb3JNZXNzYWdlIiwiZSIsImJwaUxpc3QiLCJwcm9wcyIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJpdGVtIiwiTnVtYmVyIiwibGVuZ3RoIiwic3RhdGUiLCJvblNlbGVjdCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsIm9wdGlvbiIsImJwaSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEtBREo7QUFFTkMsb0JBQWMsRUFBRSxFQUZWO0FBR05DLG1CQUFhLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsQ0FIVDtBQUlOQyxrQkFBWSxFQUFFO0FBSlIsSzs7bU5BT0csVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsVUFDUkMsT0FEUSxHQUNJLE1BQUtDLEtBRFQsQ0FDUkQsT0FEUTtBQUVoQixVQUFNRSxLQUFLLEdBQUdILENBQUMsQ0FBQ0ksTUFBRixDQUFTRCxLQUF2Qjs7QUFFQSxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLGVBQU8sTUFBS0UsUUFBTCxDQUFjO0FBQ25CUix3QkFBYyxFQUFFLEVBREc7QUFFbkJFLHNCQUFZLEVBQUU7QUFGSyxTQUFkLENBQVA7QUFJRDs7QUFFRCxVQUFNRixjQUFjLEdBQUdJLE9BQU8sQ0FBQ0ssTUFBUixDQUFlLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLElBQUlDLE1BQU0sQ0FBQ0wsS0FBRCxDQUF4QjtBQUFBLE9BQWYsQ0FBdkI7O0FBRUEsVUFBSSxDQUFDTixjQUFjLENBQUNZLE1BQXBCLEVBQTRCO0FBQzFCLGVBQU8sTUFBS0osUUFBTCxDQUFjO0FBQ25CTixzQkFBWSxFQUFFO0FBREssU0FBZCxDQUFQO0FBR0Q7O0FBRUQsYUFBTyxNQUFLTSxRQUFMLENBQWM7QUFDbkJSLHNCQUFjLEVBQWRBLGNBRG1CO0FBRW5CRSxvQkFBWSxFQUFFO0FBRkssT0FBZCxDQUFQO0FBSUQsSzs7d05BRWUsWUFBTSxDQUVyQixDOzs7Ozs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ0UsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7QUFBQSx3QkFFaUQsS0FBS1MsS0FGdEQ7QUFBQSxVQUVDWixhQUZELGVBRUNBLGFBRkQ7QUFBQSxVQUVnQkQsY0FGaEIsZUFFZ0JBLGNBRmhCO0FBQUEsVUFFZ0NFLFlBRmhDLGVBRWdDQSxZQUZoQztBQUlQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsaUJBQVMsRUFBQyxlQURaO0FBRUUsZ0JBQVEsRUFBRSxLQUFLWSxRQUZqQjtBQUdFLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCLFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRixFQU1HZCxhQUFhLENBQUNlLEdBQWQsQ0FBa0IsVUFBQ0MsTUFBRDtBQUFBLGVBQ2pCO0FBQVEsYUFBRyxFQUFFQSxNQUFiO0FBQXFCLGVBQUssRUFBRUEsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBa0RBLE1BQWxELEVBRGlCO0FBQUEsT0FBbEIsQ0FOSCxDQURGLEVBV0dmLFlBQVksR0FDWDtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBcUMsWUFBSSxFQUFDLE9BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0EsWUFESCxDQURXLEdBS1g7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHRixjQUFjLENBQUNZLE1BQWYsR0FDR1osY0FBYyxDQUFDZ0IsR0FBZixDQUFtQixVQUFDRSxHQUFEO0FBQUEsZUFDakI7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQWdDLGFBQUcsRUFBRUEsR0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHQSxHQURILENBRGlCO0FBQUEsT0FBbkIsQ0FESCxHQU1HZCxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDRSxHQUFEO0FBQUEsZUFDVjtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBZ0MsYUFBRyxFQUFFQSxHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dBLEdBREgsQ0FEVTtBQUFBLE9BQVosQ0FQTixDQWhCSixDQURGO0FBaUNEOzs7O0VBMUVrQkMsNENBQUssQ0FBQ0MsUzs7QUE2RVp0QixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJpY2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIGZpbHRlcmVkVmFsdWVzOiBbXSxcbiAgICBmaWx0ZXJPcHRpb25zOiBbODAwMCwgOTAwMCwgMTAwMDBdLFxuICAgIGVycm9yTWVzc2FnZTogJycsXG4gIH07XG5cbiAgb25TZWxlY3QgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgYnBpTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaWx0ZXJlZFZhbHVlczogW10sXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IGJwaUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtIDw9IE51bWJlcih2YWx1ZSkpO1xuXG4gICAgaWYgKCFmaWx0ZXJlZFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnTm8gbWF0Y2hlcycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJlZFZhbHVlcyxcbiAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyRmlsdGVycyA9ICgpID0+IHtcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJwaUxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmaWx0ZXJPcHRpb25zLCBmaWx0ZXJlZFZhbHVlcywgZXJyb3JNZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdH1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCB2YWx1ZTwvb3B0aW9uPlxuICAgICAgICAgIHtmaWx0ZXJPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT57YExlc3MgdGhlbiAke29wdGlvbn1gfTwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge2Vycm9yTWVzc2FnZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFZhbHVlcy5sZW5ndGhcbiAgICAgICAgICAgICAgPyBmaWx0ZXJlZFZhbHVlcy5tYXAoKGJwaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17YnBpfT5cbiAgICAgICAgICAgICAgICAgICAge2JwaX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgOiBicGlMaXN0Lm1hcCgoYnBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXticGl9PlxuICAgICAgICAgICAgICAgICAgICB7YnBpfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})