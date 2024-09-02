(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
var _AppComponent;




class AppComponent {}
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["app-root"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonApp, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [{
  path: 'home',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_home_home_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.page */ 1624)).then(m => m.HomePage)
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



 // Importa provideHttpClient



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouteReuseStrategy,
    useClass: _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonicRouteStrategy
  }, (0,_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.provideIonicAngular)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.withPreloading)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules)), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.withInterceptorsFromDi)()) // Usa provideHttpClient en lugar de HttpClientModule
  ]
});

/***/ }),

/***/ 4140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4140;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map