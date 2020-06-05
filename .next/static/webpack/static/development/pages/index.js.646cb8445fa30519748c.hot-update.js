webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/cegla/Projects/next-js-app/components/Prices.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD',\n      filteredValues: [],\n      filterOptions: [8000, 9000, 10000]\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onSelect\", function (e) {\n      var bpiList = _this.props.bpiList;\n      var value = e.target.value;\n\n      if (!value) {\n        return _this.setState({\n          filteredValues: []\n        });\n      }\n\n      var filtered = bpiList.filter(function (item) {\n        return item <= value;\n      });\n      return _this.setState({\n        filteredValues: []\n      });\n      console.log(filtered);\n      console.log(bpiList);\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var bpiList = this.props.bpiList;\n      var _this$state = this.state,\n          filterOptions = _this$state.filterOptions,\n          filteredValues = _this$state.filteredValues;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 7\n        }\n      }, __jsx(\"select\", {\n        className: \"custom-select\",\n        onChange: this.onSelect,\n        style: {\n          marginBottom: '1rem'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }\n      }, __jsx(\"option\", {\n        value: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }\n      }, \"Select value\"), filterOptions.map(function (option) {\n        return __jsx(\"option\", {\n          key: option,\n          value: option,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }\n        }, \"Less then \".concat(option));\n      })), __jsx(\"ul\", {\n        className: \"list-group\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }\n      }, bpiList && bpiList.map(function (bpi) {\n        return __jsx(\"li\", {\n          className: \"list-group-item\",\n          key: bpi,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 15\n          }\n        }, bpi);\n      })));\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwiZmlsdGVyZWRWYWx1ZXMiLCJmaWx0ZXJPcHRpb25zIiwiZSIsImJwaUxpc3QiLCJwcm9wcyIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJvblNlbGVjdCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsIm9wdGlvbiIsImJwaSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEtBREo7QUFFTkMsb0JBQWMsRUFBRSxFQUZWO0FBR05DLG1CQUFhLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWI7QUFIVCxLOzttTkFNRyxVQUFDQyxDQUFELEVBQU87QUFBQSxVQUNSQyxPQURRLEdBQ0ksTUFBS0MsS0FEVCxDQUNSRCxPQURRO0FBRWhCLFVBQU1FLEtBQUssR0FBR0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNELEtBQXZCOztBQUVBLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1YsZUFBTyxNQUFLRSxRQUFMLENBQWM7QUFDbkJQLHdCQUFjLEVBQUU7QUFERyxTQUFkLENBQVA7QUFHRDs7QUFFRCxVQUFNUSxRQUFRLEdBQUdMLE9BQU8sQ0FBQ00sTUFBUixDQUFlLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLElBQUlMLEtBQWxCO0FBQUEsT0FBZixDQUFqQjtBQUVBLGFBQU8sTUFBS0UsUUFBTCxDQUFjO0FBQ25CUCxzQkFBYyxFQUFFO0FBREcsT0FBZCxDQUFQO0FBSUFXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVCxPQUFaO0FBQ0QsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NBLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREO0FBQUEsd0JBRW1DLEtBQUtVLEtBRnhDO0FBQUEsVUFFQ1osYUFGRCxlQUVDQSxhQUZEO0FBQUEsVUFFZ0JELGNBRmhCLGVBRWdCQSxjQUZoQjtBQUlQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsaUJBQVMsRUFBQyxlQURaO0FBRUUsZ0JBQVEsRUFBRSxLQUFLYyxRQUZqQjtBQUdFLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCLFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRixFQU1HZCxhQUFhLENBQUNlLEdBQWQsQ0FBa0IsVUFBQ0MsTUFBRDtBQUFBLGVBQ2pCO0FBQVEsYUFBRyxFQUFFQSxNQUFiO0FBQXFCLGVBQUssRUFBRUEsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBa0RBLE1BQWxELEVBRGlCO0FBQUEsT0FBbEIsQ0FOSCxDQURGLEVBV0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHZCxPQUFPLElBQ05BLE9BQU8sQ0FBQ2EsR0FBUixDQUFZLFVBQUNFLEdBQUQ7QUFBQSxlQUNWO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFnQyxhQUFHLEVBQUVBLEdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR0EsR0FESCxDQURVO0FBQUEsT0FBWixDQUZKLENBWEYsQ0FERjtBQXNCRDs7OztFQXJEa0JDLDRDQUFLLENBQUNDLFM7O0FBd0RadEIscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByaWNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICBmaWx0ZXJlZFZhbHVlczogW10sXG4gICAgZmlsdGVyT3B0aW9uczogWzgwMDAsIDkwMDAsIDEwMDAwXSxcbiAgfTtcblxuICBvblNlbGVjdCA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBicGlMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpbHRlcmVkVmFsdWVzOiBbXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkID0gYnBpTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPD0gdmFsdWUpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsdGVyZWRWYWx1ZXM6IFtdLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWQpO1xuICAgIGNvbnNvbGUubG9nKGJwaUxpc3QpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJwaUxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmaWx0ZXJPcHRpb25zLCBmaWx0ZXJlZFZhbHVlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3R9XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMXJlbScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgdmFsdWU8L29wdGlvbj5cbiAgICAgICAgICB7ZmlsdGVyT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+e2BMZXNzIHRoZW4gJHtvcHRpb259YH08L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAge2JwaUxpc3QgJiZcbiAgICAgICAgICAgIGJwaUxpc3QubWFwKChicGkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17YnBpfT5cbiAgICAgICAgICAgICAgICB7YnBpfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})