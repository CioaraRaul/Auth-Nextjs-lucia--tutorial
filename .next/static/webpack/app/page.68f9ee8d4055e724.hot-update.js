"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/auth-form.js":
/*!*********************************!*\
  !*** ./components/auth-form.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/auth-action */ \"(app-pages-browser)/./actions/auth-action.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AuthForm(param) {\n    let { mode } = param;\n    _s();\n    // login or signup\n    const [formState, formAction] = (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.useFormState)(_actions_auth_action__WEBPACK_IMPORTED_MODULE_3__.auth, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        id: \"auth-form\",\n        action: formAction,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/auth-icon.jpg\",\n                    alt: \"A lock icon\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        id: \"email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        id: \"password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            formState.errors && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                id: \"form-errors\",\n                children: Object.keys(formState.errors).map((err)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: formState.errors[err]\n                    }, err, false, {\n                        fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: mode === \"login\" ? \"Login\" : \"Create account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    mode === \"login\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/?mode=signup\",\n                        children: \"Create an accout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                        lineNumber: 35,\n                        columnNumber: 30\n                    }, this),\n                    mode === \"signup\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/?mode=login\",\n                        children: \"Login with existing account.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Raul C\\\\Desktop\\\\folder\\\\nextjs-complete-guide-course-resources-main\\\\attachments\\\\auth\\\\01-starting-project\\\\components\\\\auth-form.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"MusccIk7cVZA4B8IG0TKFA0HsiE=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_2__.useFormState\n    ];\n});\n_c = AuthForm;\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC1mb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkI7QUFDWTtBQUNZO0FBRXRDLFNBQVNJLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUMvQixrQkFBa0I7SUFDbEIsTUFBTSxDQUFDQyxXQUFXQyxXQUFXLEdBQUdOLHVEQUFZQSxDQUFDQyxzREFBSUEsRUFBRSxDQUFDO0lBQ3BELHFCQUNFLDhEQUFDTTtRQUFLQyxJQUFHO1FBQVlDLFFBQVFIOzswQkFDM0IsOERBQUNJOzBCQUNDLDRFQUFDQztvQkFBSUMsS0FBSTtvQkFBd0JDLEtBQUk7Ozs7Ozs7Ozs7OzBCQUV2Qyw4REFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQVFDLE1BQUs7d0JBQVFYLElBQUc7Ozs7Ozs7Ozs7OzswQkFFdEMsOERBQUNNOztrQ0FDQyw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQVc7Ozs7OztrQ0FDMUIsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFXQyxNQUFLO3dCQUFXWCxJQUFHOzs7Ozs7Ozs7Ozs7WUFFM0NILFVBQVVlLE1BQU0sa0JBQ2YsOERBQUNDO2dCQUFHYixJQUFHOzBCQUNKYyxPQUFPQyxJQUFJLENBQUNsQixVQUFVZSxNQUFNLEVBQUVJLEdBQUcsQ0FBQyxDQUFDQyxvQkFDbEMsOERBQUNDO2tDQUFjckIsVUFBVWUsTUFBTSxDQUFDSyxJQUFJO3VCQUEzQkE7Ozs7Ozs7Ozs7MEJBSWYsOERBQUNYOzBCQUNDLDRFQUFDYTtvQkFBT1QsTUFBSzs4QkFDVmQsU0FBUyxVQUFVLFVBQVU7Ozs7Ozs7Ozs7OzBCQUdsQyw4REFBQ1U7O29CQUNFVixTQUFTLHlCQUFXLDhEQUFDTCxpREFBSUE7d0JBQUM2QixNQUFLO2tDQUFnQjs7Ozs7O29CQUMvQ3hCLFNBQVMsMEJBQ1IsOERBQUNMLGlEQUFJQTt3QkFBQzZCLE1BQUs7a0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQztHQXBDd0J6Qjs7UUFFVUgsbURBQVlBOzs7S0FGdEJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC1mb3JtLmpzP2JmNGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VGb3JtU3RhdGUgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBhdXRoLCBzaWdudXAgfSBmcm9tIFwiQC9hY3Rpb25zL2F1dGgtYWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhGb3JtKHsgbW9kZSB9KSB7XG4gIC8vIGxvZ2luIG9yIHNpZ251cFxuICBjb25zdCBbZm9ybVN0YXRlLCBmb3JtQWN0aW9uXSA9IHVzZUZvcm1TdGF0ZShhdXRoLCB7fSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gaWQ9XCJhdXRoLWZvcm1cIiBhY3Rpb249e2Zvcm1BY3Rpb259PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F1dGgtaWNvbi5qcGdcIiBhbHQ9XCJBIGxvY2sgaWNvblwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIC8+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiAvPlxuICAgICAgPC9wPlxuICAgICAge2Zvcm1TdGF0ZS5lcnJvcnMgJiYgKFxuICAgICAgICA8dWwgaWQ9XCJmb3JtLWVycm9yc1wiPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhmb3JtU3RhdGUuZXJyb3JzKS5tYXAoKGVycikgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17ZXJyfT57Zm9ybVN0YXRlLmVycm9yc1tlcnJdfTwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgICAgPHA+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIHttb2RlID09PSBcImxvZ2luXCIgPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBhY2NvdW50XCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIHttb2RlID09PSBcImxvZ2luXCIgJiYgPExpbmsgaHJlZj1cIi8/bW9kZT1zaWdudXBcIj5DcmVhdGUgYW4gYWNjb3V0PC9MaW5rPn1cbiAgICAgICAge21vZGUgPT09IFwic2lnbnVwXCIgJiYgKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvP21vZGU9bG9naW5cIj5Mb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnQuPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9wPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRm9ybVN0YXRlIiwiYXV0aCIsInNpZ251cCIsIkF1dGhGb3JtIiwibW9kZSIsImZvcm1TdGF0ZSIsImZvcm1BY3Rpb24iLCJmb3JtIiwiaWQiLCJhY3Rpb24iLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImVycm9ycyIsInVsIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImVyciIsImxpIiwiYnV0dG9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth-form.js\n"));

/***/ })

});