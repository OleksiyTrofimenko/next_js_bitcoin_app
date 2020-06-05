webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/cegla/Projects/next-js-app/components/Prices.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD',\n      filtered: [],\n      filterOptions: [8000, 9000, 1000]\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onSelect\", function (e) {\n      var bpiList = _this.props.bpiList;\n      var value = Number(e.target.value);\n      console.log(e.target.value);\n      var filtered = bpiList.filter(function (item) {\n        return item >= value;\n      });\n      console.log(filtered);\n      console.log(bpiList);\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var bpiList = this.props.bpiList;\n      var filterOptions = this.props.filterOptions;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 7\n        }\n      }, __jsx(\"select\", {\n        className: \"custom-select\",\n        onChange: this.onSelect,\n        style: {\n          marginBottom: '1rem'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 9\n        }\n      }, __jsx(\"option\", {\n        value: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }\n      }, \"Select value\"), __jsx(\"option\", {\n        value: \"8000\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }\n      }, \"More then 8000\"), __jsx(\"option\", {\n        value: \"9000\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }\n      }, \"More then 9000\"), __jsx(\"option\", {\n        value: \"10000\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }\n      }, \"More then 10000\")), __jsx(\"ul\", {\n        className: \"list-group\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }\n      }, bpiList && bpiList.map(function (bpi) {\n        return __jsx(\"li\", {\n          className: \"list-group-item\",\n          key: bpi,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }\n        }, bpi);\n      })));\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwiZmlsdGVyZWQiLCJmaWx0ZXJPcHRpb25zIiwiZSIsImJwaUxpc3QiLCJwcm9wcyIsInZhbHVlIiwiTnVtYmVyIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsIml0ZW0iLCJvblNlbGVjdCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImJwaSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEtBREo7QUFFTkMsY0FBUSxFQUFFLEVBRko7QUFHTkMsbUJBQWEsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYjtBQUhULEs7O21OQU1HLFVBQUNDLENBQUQsRUFBTztBQUFBLFVBQ1JDLE9BRFEsR0FDSSxNQUFLQyxLQURULENBQ1JELE9BRFE7QUFFaEIsVUFBTUUsS0FBSyxHQUFHQyxNQUFNLENBQUNKLENBQUMsQ0FBQ0ssTUFBRixDQUFTRixLQUFWLENBQXBCO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxDQUFDLENBQUNLLE1BQUYsQ0FBU0YsS0FBckI7QUFFQSxVQUFNTCxRQUFRLEdBQUdHLE9BQU8sQ0FBQ08sTUFBUixDQUFlLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLElBQUlOLEtBQWxCO0FBQUEsT0FBZixDQUFqQjtBQUVBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWVQsUUFBWjtBQUNBUSxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBWjtBQUNELEs7Ozs7Ozs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDQSxPQURELEdBQ2EsS0FBS0MsS0FEbEIsQ0FDQ0QsT0FERDtBQUFBLFVBRUNGLGFBRkQsR0FFbUIsS0FBS0csS0FGeEIsQ0FFQ0gsYUFGRDtBQUlQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsaUJBQVMsRUFBQyxlQURaO0FBRUUsZ0JBQVEsRUFBRSxLQUFLVyxRQUZqQjtBQUdFLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCLFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRixFQVNFO0FBQVEsYUFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFURixFQVVFO0FBQVEsYUFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFWRixFQVdFO0FBQVEsYUFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFYRixDQURGLEVBY0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHVixPQUFPLElBQ05BLE9BQU8sQ0FBQ1csR0FBUixDQUFZLFVBQUNDLEdBQUQ7QUFBQSxlQUNWO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFnQyxhQUFHLEVBQUVBLEdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR0EsR0FESCxDQURVO0FBQUEsT0FBWixDQUZKLENBZEYsQ0FERjtBQXlCRDs7OztFQS9Da0JDLDRDQUFLLENBQUNDLFM7O0FBa0RabkIscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByaWNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICBmaWx0ZXJlZDogW10sXG4gICAgZmlsdGVyT3B0aW9uczogWzgwMDAsIDkwMDAsIDEwMDBdLFxuICB9O1xuXG4gIG9uU2VsZWN0ID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGJwaUxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkID0gYnBpTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPj0gdmFsdWUpO1xuXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWQpO1xuICAgIGNvbnNvbGUubG9nKGJwaUxpc3QpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJwaUxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmaWx0ZXJPcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdH1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCB2YWx1ZTwvb3B0aW9uPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiODAwMFwiPk1vcmUgdGhlbiA4MDAwPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjkwMDBcIj5Nb3JlIHRoZW4gOTAwMDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDAwMFwiPk1vcmUgdGhlbiAxMDAwMDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICB7YnBpTGlzdCAmJlxuICAgICAgICAgICAgYnBpTGlzdC5tYXAoKGJwaSkgPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXticGl9PlxuICAgICAgICAgICAgICAgIHticGl9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})