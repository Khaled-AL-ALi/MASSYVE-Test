"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    var formik = useFormik({\n        initialValues: {\n            firstname: \"\",\n            lastname: \"\",\n            email: \"\",\n            hpassword: \"\"\n        },\n        validationSchema: Yup.object().shape({\n            username: Yup.string().required(\"username required\"),\n            email: Yup.string().required(t(\"emailReq\"))\n        }),\n        onSubmit: function(values) {\n            console.log(values);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                marginTop: 8,\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                component: \"form\",\n                onSubmit: handleSubmit,\n                noValidate: true,\n                sx: {\n                    mt: 1\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        margin: \"normal\",\n                        required: true,\n                        fullWidth: true,\n                        id: \"email\",\n                        label: \"Username\",\n                        name: \"email\",\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"/home/khaled/Desktop/massyve/frontend/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        margin: \"normal\",\n                        required: true,\n                        fullWidth: true,\n                        name: \"password\",\n                        label: \"Password\",\n                        type: \"password\",\n                        id: \"password\"\n                    }, void 0, false, {\n                        fileName: \"/home/khaled/Desktop/massyve/frontend/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        fullWidth: true,\n                        variant: \"contained\",\n                        sx: {\n                            mt: 3,\n                            mb: 2\n                        },\n                        children: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"/home/khaled/Desktop/massyve/frontend/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/khaled/Desktop/massyve/frontend/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/khaled/Desktop/massyve/frontend/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/khaled/Desktop/massyve/frontend/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"B/4rI4IXClQ7sG7psKj+pOuRe5Q=\", true);\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDbUM7QUFFbkQsU0FBU0ssSUFBSSxHQUFHOztJQUUzQixJQUFNQyxNQUFNLEdBQUdDLFNBQVMsQ0FBQztRQUNyQkMsYUFBYSxFQUFFO1lBQ1hDLFNBQVMsRUFBRSxFQUFFO1lBQ2JDLFFBQVEsRUFBRSxFQUFFO1lBQ1pDLEtBQUssRUFBRSxFQUFFO1lBQ1RDLFNBQVMsRUFBRSxFQUFFO1NBQ2hCO1FBQ0RDLGdCQUFnQixFQUFFQyxHQUFHLENBQUNDLE1BQU0sRUFBRSxDQUFDQyxLQUFLLENBQUM7WUFDakNDLFFBQVEsRUFBRUgsR0FBRyxDQUFDSSxNQUFNLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1lBQ3BEUixLQUFLLEVBQUVHLEdBQUcsQ0FBQ0ksTUFBTSxFQUFFLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBRTlDLENBQUM7UUFDRkMsUUFBUSxFQUFFLFNBQUNDLE1BQU0sRUFBSztZQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0osQ0FBQztJQU1GLHFCQUVJLDhEQUFDbEIsb0RBQVM7UUFBQ3FCLFNBQVMsRUFBQyxNQUFNO1FBQUNDLFFBQVEsRUFBQyxJQUFJO2tCQUVyQyw0RUFBQ3ZCLDhDQUFHO1lBQUN3QixFQUFFLEVBQUU7Z0JBQUVDLFNBQVMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsTUFBTTtnQkFBRUMsYUFBYSxFQUFFLFFBQVE7Z0JBQUVDLFVBQVUsRUFBRSxRQUFRO2FBQUc7c0JBQ3RGLDRFQUFDNUIsOENBQUc7Z0JBQUNzQixTQUFTLEVBQUMsTUFBTTtnQkFBQ0osUUFBUSxFQUFFVyxZQUFZO2dCQUFFQyxVQUFVO2dCQUFDTixFQUFFLEVBQUU7b0JBQUVPLEVBQUUsRUFBRSxDQUFDO2lCQUFFOztrQ0FFbEUsOERBQUNoQyxvREFBUzt3QkFDTmlDLE1BQU0sRUFBQyxRQUFRO3dCQUNmaEIsUUFBUTt3QkFDUmlCLFNBQVM7d0JBQ1RDLEVBQUUsRUFBQyxPQUFPO3dCQUNWQyxLQUFLLEVBQUMsVUFBVTt3QkFDaEJDLElBQUksRUFBQyxPQUFPO3dCQUNaQyxTQUFTOzs7Ozs0QkFDWDtrQ0FDRiw4REFBQ3RDLG9EQUFTO3dCQUNOaUMsTUFBTSxFQUFDLFFBQVE7d0JBQ2ZoQixRQUFRO3dCQUNSaUIsU0FBUzt3QkFDVEcsSUFBSSxFQUFDLFVBQVU7d0JBQ2ZELEtBQUssRUFBQyxVQUFVO3dCQUNoQkcsSUFBSSxFQUFDLFVBQVU7d0JBQ2ZKLEVBQUUsRUFBQyxVQUFVOzs7Ozs0QkFDZjtrQ0FFRiw4REFBQ3BDLGlEQUFNO3dCQUFDd0MsSUFBSSxFQUFDLFFBQVE7d0JBQUNMLFNBQVM7d0JBQUNNLE9BQU8sRUFBQyxXQUFXO3dCQUFDZixFQUFFLEVBQUU7NEJBQUVPLEVBQUUsRUFBRSxDQUFDOzRCQUFFUyxFQUFFLEVBQUUsQ0FBQzt5QkFBRTtrQ0FBRyxnQkFBYzs7Ozs7NEJBQVM7Ozs7OztvQkFFaEc7Ozs7O2dCQUNKOzs7OztZQUNFLENBQ2Q7Q0FDTDtHQXZEdUJ0QyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgQm94LCBDb250YWluZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJycsXG4gICAgICAgICAgICBsYXN0bmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBocGFzc3dvcmQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgndXNlcm5hbWUgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQodCgnZW1haWxSZXEnKSksXG4gICAgICAgICBcbiAgICAgICAgfSksXG4gICAgICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICAgICAgICB9LFxuICAgIH0pO1xuXG5cblxuXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cblxuICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW5Ub3A6IDgsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCB9fT5cbiAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlIHN4PXt7IG10OiAxIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGZ1bGxXaWR0aCB2YXJpYW50PVwiY29udGFpbmVkXCIgc3g9e3sgbXQ6IDMsIG1iOiAyIH19ID5DcmVhdGUgQWNjb3VudDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIkJveCIsIkNvbnRhaW5lciIsIkhvbWUiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsImhwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJvYmplY3QiLCJzaGFwZSIsInVzZXJuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJ0Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50IiwibWF4V2lkdGgiLCJzeCIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImhhbmRsZVN1Ym1pdCIsIm5vVmFsaWRhdGUiLCJtdCIsIm1hcmdpbiIsImZ1bGxXaWR0aCIsImlkIiwibGFiZWwiLCJuYW1lIiwiYXV0b0ZvY3VzIiwidHlwZSIsInZhcmlhbnQiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});