(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_shared/sharedlayout/sharedlayout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/_shared/sharedlayout/sharedlayout.component.ts ***!
  \****************************************************************/
/*! exports provided: SharedlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedlayoutComponent", function() { return SharedlayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.component */ "./src/app/footer/footer.component.ts");





class SharedlayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedlayoutComponent.ɵfac = function SharedlayoutComponent_Factory(t) { return new (t || SharedlayoutComponent)(); };
SharedlayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedlayoutComponent, selectors: [["app-sharedlayout"]], decls: 4, vars: 0, consts: [[1, "wrapper"]], template: function SharedlayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvc2hhcmVkbGF5b3V0L3NoYXJlZGxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedlayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sharedlayout',
                templateUrl: './sharedlayout.component.html',
                styleUrls: ['./sharedlayout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'lovedog';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_routing_base_base_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/routing/base/base-routing.module */ "./src/app/routing/base/base-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _shared_sharedlayout_sharedlayout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_shared/sharedlayout/sharedlayout.component */ "./src/app/_shared/sharedlayout/sharedlayout.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _modules_adoption_adoption_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/adoption/adoption.component */ "./src/app/modules/adoption/adoption.component.ts");
/* harmony import */ var _modules_hostpital_hostpital_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/hostpital/hostpital.component */ "./src/app/modules/hostpital/hostpital.component.ts");
/* harmony import */ var _modules_lost_lost_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/lost/lost.component */ "./src/app/modules/lost/lost.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _directive_owlcarousel_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directive/owlcarousel.directive */ "./src/app/directive/owlcarousel.directive.ts");
/* harmony import */ var _modules_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/banner/banner.component */ "./src/app/modules/banner/banner.component.ts");
/* harmony import */ var _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipe/adopt/sterilization.pipe */ "./src/app/pipe/adopt/sterilization.pipe.ts");
/* harmony import */ var _service_utility_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/utility.service */ "./src/app/service/utility.service.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18__);




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _service_utility_service__WEBPACK_IMPORTED_MODULE_17__["ApiInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            src_app_routing_base_base_routing_module__WEBPACK_IMPORTED_MODULE_5__["BaseRoutingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18__["OwlModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _shared_sharedlayout_sharedlayout_component__WEBPACK_IMPORTED_MODULE_8__["SharedlayoutComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _modules_adoption_adoption_component__WEBPACK_IMPORTED_MODULE_10__["AdoptionComponent"],
        _modules_hostpital_hostpital_component__WEBPACK_IMPORTED_MODULE_11__["HostpitalComponent"],
        _modules_lost_lost_component__WEBPACK_IMPORTED_MODULE_12__["LostComponent"],
        _modules_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _directive_owlcarousel_directive__WEBPACK_IMPORTED_MODULE_14__["OwlcarouselDirective"],
        _modules_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"],
        _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__["SterilizationPipe"],
        _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__["BodyTypePipe"],
        _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__["BacterinPipe"],
        _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__["Sex"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        src_app_routing_base_base_routing_module__WEBPACK_IMPORTED_MODULE_5__["BaseRoutingModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18__["OwlModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _shared_sharedlayout_sharedlayout_component__WEBPACK_IMPORTED_MODULE_8__["SharedlayoutComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _modules_adoption_adoption_component__WEBPACK_IMPORTED_MODULE_10__["AdoptionComponent"],
                    _modules_hostpital_hostpital_component__WEBPACK_IMPORTED_MODULE_11__["HostpitalComponent"],
                    _modules_lost_lost_component__WEBPACK_IMPORTED_MODULE_12__["LostComponent"],
                    _modules_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _directive_owlcarousel_directive__WEBPACK_IMPORTED_MODULE_14__["OwlcarouselDirective"],
                    _modules_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"],
                    _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__["SterilizationPipe"],
                    _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__["BodyTypePipe"],
                    _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__["BacterinPipe"],
                    _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_16__["Sex"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    src_app_routing_base_base_routing_module__WEBPACK_IMPORTED_MODULE_5__["BaseRoutingModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18__["OwlModule"]
                ],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _service_utility_service__WEBPACK_IMPORTED_MODULE_17__["ApiInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/directive/owlcarousel.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directive/owlcarousel.directive.ts ***!
  \****************************************************/
/*! exports provided: OwlcarouselDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlcarouselDirective", function() { return OwlcarouselDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OwlcarouselDirective {
    constructor(el) {
        this.$el = $(el.nativeElement);
    }
    ngAfterViewChecked() {
        this.initOwl(); // 初始化 Owl Carousel。
    }
    ngOnDestroy() {
        this.destroyOwl(); // 換頁時將 Owl Carousel 從 Element 上釋放。
    }
    initOwl() {
        if (this.$el.find('.item').length && // 由於論播內容可能是經由 API 來的，所以要確定 Owl Carousel 內有東西可執行。
            typeof $.fn.owlCarousel === 'function' && // 確定 Owl Carousel 有被載入。
            !this.$el.hasClass('owl-loaded') // Owl Carousel 執行並初始化在 element 上時會加上 .owl-loaded 代表該 element 已初始化，此行是用以確保因為 ngAfterViewChecked 會一直重覆 check 的特性導致該 element 一直被重覆初始化 Owl Carousel，致使瀏覽器效能低下。
        ) {
            setTimeout(() => {
                this.$el.owlCarousel(this.owlOptions);
            }, 0);
        }
    }
    destroyOwl() {
        if (this.$el) {
            this.$el.trigger('destroy.owl.carousel')
                .removeClass('owl-loaded owl-hidden')
                .find('.owl-stage:empty, .owl-item:empty')
                .remove();
        }
    }
    reInitOwl() {
        // 在同一個 component 中只有切換資料的時候，並不會觸發 ngOnDestroy，如果發生這樣的事情
        // 請在載入其他資料完成時 call 這段程式，Owl Carousel 會重新初始化
        this.destroyOwl();
        this.initOwl();
    }
}
OwlcarouselDirective.ɵfac = function OwlcarouselDirective_Factory(t) { return new (t || OwlcarouselDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
OwlcarouselDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OwlcarouselDirective, selectors: [["", "appOwlcarousel", ""]], inputs: { owlOptions: "owlOptions" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwlcarouselDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appOwlcarousel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { owlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [[1, "footer", "justify-content-center", "text-center"], [1, "container-fluid"], [1, "social", "text-center"], ["href", "https://www.facebook.com", "target", "_blank", "rel", "noopener noreferrer", 1, "icon-facebook"], ["src", "assets/images/facebook.svg", "alt", "Facebook"], ["href", "https://www.instagram.com/", "target", "_blank", "rel", "noopener noreferrer", 1, "icon-instgram"], ["src", "assets/images/instagram.svg", "alt", "instgram"], ["href", "https://lin.ee/a7AbYMV", "target", "_blank", "rel", "noopener noreferrer", 1, "icon-line"], ["src", "assets/images/line.svg", "alt", "line"], ["href", "https://twitter.com/", "target", "_blank", "rel", "noopener noreferrer", 1, "icon-twitter"], ["src", "assets/images/twitter.svg", "alt", "twitter"], [1, ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A9 2020 LionEngineer\u7248\u6B0A\u6240\u6709");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #3F8EBF;\n  height: 20vh;\n}\n.footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 56px;\n  margin: 20px 20px;\n  padding-bottom: 2px;\n}\n.footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #F28322;\n}\n@media (max-width: 576px) {\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 48px;\n    width: 48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbXMtc3R5bGUvYmFzaWMuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQU9BLGlDQUFBO0FBT0EsaUNBQUE7QUNaQTtFQUNJLHlCRERVO0VDRVYsWUFBQTtBQUVKO0FBRVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBaEI7QUFHZ0I7RUFDSSxnQ0FBQTtBQURwQjtBRGlCTTtFQ3hCTTtJQVlRLFlBQUE7SUFDQSxXQUFBO0VBRGxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gSGV4ICovXHJcbiRjb2xvci0xLWhleDogIzQ1ODZCRjtcclxuJGNvbG9yLTItaGV4OiAjM0Y4RUJGO1xyXG4kY29sb3ItMy1oZXg6ICM3N0IzRDk7XHJcbiRjb2xvci00LWhleDogI0YyODMyMjtcclxuJGNvbG9yLTUtaGV4OiAjRDkzNjExO1xyXG5cclxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gUkdCQSAqL1xyXG4kY29sb3ItMS1yZ2JhOiByZ2JhKDY4LDEzNCwxOTEsIDEpO1xyXG4kY29sb3ItMi1yZ2JhOiByZ2JhKDYzLDE0MiwxOTEsIDEpO1xyXG4kY29sb3ItMy1yZ2JhOiByZ2JhKDExOSwxNzksMjE2LCAxKTtcclxuJGNvbG9yLTQtcmdiYTogcmdiYSgyNDIsMTMxLDMzLCAxKTtcclxuJGNvbG9yLTUtcmdiYTogcmdiYSgyMTYsNTMsMTcsIDEpO1xyXG5cclxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gSFNMQSAqL1xyXG4kY29sb3ItMS1oc2xhOiBoc2xhKDIwOCwgNDgsIDUxLCAxKTtcclxuJGNvbG9yLTItaHNsYTogaHNsYSgyMDIsIDUwLCA0OSwgMSk7XHJcbiRjb2xvci0zLWhzbGE6IGhzbGEoMjAyLCA1NiwgNjUsIDEpO1xyXG4kY29sb3ItNC1oc2xhOiBoc2xhKDI4LCA4OSwgNTQsIDEpO1xyXG4kY29sb3ItNS1oc2xhOiBoc2xhKDExLCA4NSwgNDUsIDEpO1xyXG5cclxuJGNvbG9yLXdoaXRlOiNGRkZGRkY7XHJcblxyXG5cclxuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgICBAaWYgJHBvaW50ID09IGxhcmdlIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkcG9pbnQgPT0gbWVkaXVtIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkcG9pbnQgPT0gc21hbGwge1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgfSIsIkB1c2UgJy4uL3Byb2dyYW1zLXN0eWxlL2Jhc2ljLnNjc3MnO1xyXG5cclxuLmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJhc2ljLiRjb2xvci0yLWhleDtcclxuICAgIGhlaWdodDogMjB2aDtcclxuXHJcbiAgICAuc29jaWFse1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmFzaWMuJGNvbG9yLTQtaGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJhc2ljLmJyZWFrcG9pbnQoc21hbGwpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/adoption/adoption.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/adoption/adoption.component.ts ***!
  \********************************************************/
/*! exports provided: AdoptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptionComponent", function() { return AdoptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipe/adopt/sterilization.pipe */ "./src/app/pipe/adopt/sterilization.pipe.ts");





function AdoptionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u52D5\u7269\u985E\u578B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u52D5\u7269\u6027\u5225");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u52D5\u7269\u9AD4\u578B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "bodyType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u52D5\u7269\u6BDB\u8272");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u662F\u5426\u7D55\u80B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "sterilization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u65BD\u6253\u72C2\u72AC\u75AB\u82D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "bacterin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u6536\u5BB9\u6240");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u96FB\u8A71");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u5730\u5740");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.album_file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.animal_kind);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 12, item_r1.animal_sex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 14, item_r1.animal_bodytype));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.animal_colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 16, item_r1.animal_sterilization));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 18, item_r1.animal_bacterin));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r1.shelter_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.shelter_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.shelter_tel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r1.shelter_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.shelter_address);
} }
class AdoptionComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.GetTop30();
    }
    GetTop30() {
        this.httpClient.get("assets/data/animalAdopt.json").subscribe(data => {
            let hasImage = data.filter(x => x.album_file != '');
            let info = [];
            for (let i = 0; i < 6; i++) {
                let random = Math.floor(Math.random() * hasImage.length) + 1;
                info.push(hasImage[random]);
            }
            this.adoptionPromote = info;
        });
    }
}
AdoptionComponent.ɵfac = function AdoptionComponent_Factory(t) { return new (t || AdoptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdoptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdoptionComponent, selectors: [["app-adoption"]], decls: 5, vars: 1, consts: [[1, "container", "text-right", "py-2"], [1, "btn", "btn", "btn-outline-info", 3, "click"], [1, "row", "justify-content-center", "h-100"], ["class", "col-12 col-md-3 adopt-card", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-3", "adopt-card"], [1, "face", "face1"], [1, "content"], ["alt", "", 1, "img-thumbnail", 3, "src"], [1, "face", "face2"], [1, "row", "no-gutters"], [1, "col-4", "text-center", "border", "px-2"], [1, "col-8", "text-center", "border", "px-2"], [1, "col-8", "text-center", "border", "px-2", "text-word-break-all", 3, "title"]], template: function AdoptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdoptionComponent_Template_button_click_1_listener() { return ctx.GetTop30(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdoptionComponent_div_4_Template, 55, 20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adoptionPromote);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_3__["Sex"], _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_3__["BodyTypePipe"], _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_3__["SterilizationPipe"], _pipe_adopt_sterilization_pipe__WEBPACK_IMPORTED_MODULE_3__["BacterinPipe"]], styles: [".adopt-card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300px;\n  margin: 0 10px;\n  margin: 10px 5px;\n}\n.adopt-card[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: 0.8s;\n  padding: 5px 0;\n}\n.adopt-card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%] {\n  background: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  transform-origin: bottom;\n}\n.adopt-card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 300px;\n  object-fit: contain;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\n}\n.adopt-card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #fff;\n  text-align: center;\n  font-size: 1.5em;\n}\n.adopt-card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%] {\n  background: #FFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  transform-origin: top;\n  transform: translateY(100%) rotateX(90deg);\n}\n.adopt-card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: 1px solid;\n}\n.adopt-card[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%] {\n  transform: translateY(-100%) rotateX(90deg);\n  transition: transform 0.8s;\n  background: #F28322;\n}\n.adopt-card[_ngcontent-%COMP%]:hover   .face.face2[_ngcontent-%COMP%] {\n  transform: translateY(0) rotateX(0deg);\n  transition: transform 0.8s;\n}\n@media (max-width: 576px) {\n  .adopt-card[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n}\n.text-word-break-all[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbXMtc3R5bGUvYmFzaWMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG9wdGlvbi9hZG9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQU9BLGlDQUFBO0FBT0EsaUNBQUE7QUNaQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUFRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUVaO0FBQ1k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDaEI7QUFDWTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDaEI7QUFHUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQURaO0FBR1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRGhCO0FBT1k7RUFDSSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJEM0RGO0FDc0RkO0FBUVk7RUFDSSxzQ0FBQTtFQUNBLDBCQUFBO0FBTmhCO0FEOUJNO0VDOUJOO0lBd0VRLGNBQUE7RUFSTjtBQUNGO0FBV0E7RUFDSSxxQkFBQTtBQVJKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG9wdGlvbi9hZG9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIEhleCAqL1xyXG4kY29sb3ItMS1oZXg6ICM0NTg2QkY7XHJcbiRjb2xvci0yLWhleDogIzNGOEVCRjtcclxuJGNvbG9yLTMtaGV4OiAjNzdCM0Q5O1xyXG4kY29sb3ItNC1oZXg6ICNGMjgzMjI7XHJcbiRjb2xvci01LWhleDogI0Q5MzYxMTtcclxuXHJcbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIFJHQkEgKi9cclxuJGNvbG9yLTEtcmdiYTogcmdiYSg2OCwxMzQsMTkxLCAxKTtcclxuJGNvbG9yLTItcmdiYTogcmdiYSg2MywxNDIsMTkxLCAxKTtcclxuJGNvbG9yLTMtcmdiYTogcmdiYSgxMTksMTc5LDIxNiwgMSk7XHJcbiRjb2xvci00LXJnYmE6IHJnYmEoMjQyLDEzMSwzMywgMSk7XHJcbiRjb2xvci01LXJnYmE6IHJnYmEoMjE2LDUzLDE3LCAxKTtcclxuXHJcbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIEhTTEEgKi9cclxuJGNvbG9yLTEtaHNsYTogaHNsYSgyMDgsIDQ4LCA1MSwgMSk7XHJcbiRjb2xvci0yLWhzbGE6IGhzbGEoMjAyLCA1MCwgNDksIDEpO1xyXG4kY29sb3ItMy1oc2xhOiBoc2xhKDIwMiwgNTYsIDY1LCAxKTtcclxuJGNvbG9yLTQtaHNsYTogaHNsYSgyOCwgODksIDU0LCAxKTtcclxuJGNvbG9yLTUtaHNsYTogaHNsYSgxMSwgODUsIDQ1LCAxKTtcclxuXHJcbiRjb2xvci13aGl0ZTojRkZGRkZGO1xyXG5cclxuXHJcbkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICRwb2ludCA9PSBsYXJnZSB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHBvaW50ID09IG1lZGl1bSB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHBvaW50ID09IHNtYWxsIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gIH0iLCJAdXNlICcuLi8uLi9wcm9ncmFtcy1zdHlsZS9iYXNpYy5zY3NzJztcclxuXHJcbi5hZG9wdC1jYXJke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgIFxyXG4gICAgLmZhY2V7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG5cclxuICAgICAgICAmLmZhY2Uxe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogIDJweCAycHggNXB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZmFjZTJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgLmZhY2V7XHJcbiAgICAgICAgICAgICYuZmFjZTF7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYXNpYy4kY29sb3ItNC1oZXg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZmFjZTJ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGJhc2ljLmJyZWFrcG9pbnQoc21hbGwpIHsgXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LXdvcmQtYnJlYWstYWxse1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdoptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adoption',
                templateUrl: './adoption.component.html',
                styleUrls: ['./adoption.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/banner/banner.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/banner/banner.component.ts ***!
  \****************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directive_owlcarousel_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directive/owlcarousel.directive */ "./src/app/directive/owlcarousel.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function BannerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + item_r1.imgPath + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2014\u2014", item_r1.author, "");
} }
class BannerComponent {
    constructor(_zone) {
        this._zone = _zone;
        this.bannerInfos = [];
        this.owlCarouselOptions = {
            items: 1,
            dots: true,
            navigation: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: false,
            loop: true,
            autoHeight: true,
            onTranslate: (e) => _zone.run(() => console.log("is translated, the page index is: " + e.page.index)),
        };
    }
    ngOnInit() {
        this.InitBannerInfo();
    }
    InitBannerInfo() {
        this.bannerInfos.push({ imgPath: 'assets/images/bg-1.png', content: '狗不是我們人一生的全部，但牠卻讓我們的人生完整了。', author: '生態攝影師 羅傑、卡拉斯' });
        this.bannerInfos.push({ imgPath: 'assets/images/bg-2.png', content: '錢可以買到一條很優秀的狗，卻買不到它搖尾的熱情。', author: '亨利·惠勒·蕭' });
        this.bannerInfos.push({ imgPath: 'assets/images/bg-3.png', content: '如果我們了解狗真正的本性，並且知道如何鼓勵它們，我們就能成為更好的主人。', author: '依莉莎白湯瑪斯' });
        this.bannerInfos.push({ imgPath: 'assets/images/bg-4.png', content: '對一隻狗好，也許只花你一部分的時間，而它，卻將一輩子回報於你。如果你願意，它知道怎樣感動你的心', author: '嘉貝麗．文生' });
        this.bannerInfos.push({ imgPath: 'assets/images/bg-5.png', content: '寵物只是你生活的一部分,但你卻是寵物的全世界。', author: '' });
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 2, vars: 2, consts: [["appOwlcarousel", "", 1, "owl-carousel", "banner", 3, "owlOptions"], ["class", "slide item", 3, "backgroundImage", 4, "ngFor", "ngForOf"], [1, "slide", "item"], [1, "slide-Content"], [1, "content"], [1, "author"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("owlOptions", ctx.owlCarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bannerInfos);
    } }, directives: [_directive_owlcarousel_directive__WEBPACK_IMPORTED_MODULE_1__["OwlcarouselDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".banner[_ngcontent-%COMP%] {\n  background: white;\n  background: linear-gradient(180deg, white 0%, #a6a6a6 20%, rgba(128, 127, 127, 0.6979166667) 45%, rgba(79, 78, 78, 0.6026785714) 78%, rgba(9, 9, 9, 0.4990371148) 100%);\n}\n.banner[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  position: relative;\n}\n.banner[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-Content[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 150px;\n  padding-right: 10px;\n  padding-left: 10px;\n  left: 5%;\n  top: 20%;\n  width: 50%;\n}\n.banner[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-Content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 400;\n}\n@media (max-width: 576px) {\n  .banner[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-Content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.banner[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-Content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 400;\n}\n@media (max-width: 576px) {\n  .banner[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-Content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (max-width: 576px) {\n  .banner[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-Content[_ngcontent-%COMP%] {\n    top: 10%;\n    width: 80%;\n  }\n}\n.owl-carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: lightgray;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-attachment: scroll;\n}\n@media (max-width: 576px) {\n  .owl-carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-position: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbXMtc3R5bGUvYmFzaWMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBT0EsaUNBQUE7QUFPQSxpQ0FBQTtBQ2JBO0VBQ0ksaUJBQUE7RUFFQSx1S0FBQTtBQUVKO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBRlE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUlaO0FBSFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFLaEI7QURVTTtFQ2pCTTtJQUtRLGlCQUFBO0VBTWxCO0FBQ0Y7QUFKWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFNaEI7QURDTTtFQ1RNO0lBS1EsY0FBQTtFQU9sQjtBQUNGO0FESk07RUN6QkU7SUEwQlEsUUFBQTtJQUNBLFVBQUE7RUFPZDtBQUNGO0FBQUk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQUdSO0FEbkJNO0VDVUY7SUFTTyxzQkFBQTtJQUNBLDJCQUFBO0VBSVQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIEhleCAqL1xyXG4kY29sb3ItMS1oZXg6ICM0NTg2QkY7XHJcbiRjb2xvci0yLWhleDogIzNGOEVCRjtcclxuJGNvbG9yLTMtaGV4OiAjNzdCM0Q5O1xyXG4kY29sb3ItNC1oZXg6ICNGMjgzMjI7XHJcbiRjb2xvci01LWhleDogI0Q5MzYxMTtcclxuXHJcbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIFJHQkEgKi9cclxuJGNvbG9yLTEtcmdiYTogcmdiYSg2OCwxMzQsMTkxLCAxKTtcclxuJGNvbG9yLTItcmdiYTogcmdiYSg2MywxNDIsMTkxLCAxKTtcclxuJGNvbG9yLTMtcmdiYTogcmdiYSgxMTksMTc5LDIxNiwgMSk7XHJcbiRjb2xvci00LXJnYmE6IHJnYmEoMjQyLDEzMSwzMywgMSk7XHJcbiRjb2xvci01LXJnYmE6IHJnYmEoMjE2LDUzLDE3LCAxKTtcclxuXHJcbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIEhTTEEgKi9cclxuJGNvbG9yLTEtaHNsYTogaHNsYSgyMDgsIDQ4LCA1MSwgMSk7XHJcbiRjb2xvci0yLWhzbGE6IGhzbGEoMjAyLCA1MCwgNDksIDEpO1xyXG4kY29sb3ItMy1oc2xhOiBoc2xhKDIwMiwgNTYsIDY1LCAxKTtcclxuJGNvbG9yLTQtaHNsYTogaHNsYSgyOCwgODksIDU0LCAxKTtcclxuJGNvbG9yLTUtaHNsYTogaHNsYSgxMSwgODUsIDQ1LCAxKTtcclxuXHJcbiRjb2xvci13aGl0ZTojRkZGRkZGO1xyXG5cclxuXHJcbkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICRwb2ludCA9PSBsYXJnZSB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHBvaW50ID09IG1lZGl1bSB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHBvaW50ID09IHNtYWxsIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gIH0iLCJAdXNlICcuLi8uLi9wcm9ncmFtcy1zdHlsZS9iYXNpYy5zY3NzJztcclxuLmJhbm5lcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICAvLyBib3gtc2hhZG93OiA1cHggMzBweCAxMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMTY2LDE2NiwxNjYsMSkgMjAlLCByZ2JhKDEyOCwxMjcsMTI3LDAuNjk3OTE2NjY2NjY2NjY2NykgNDUlLCByZ2JhKDc5LDc4LDc4LDAuNjAyNjc4NTcxNDI4NTcxNCkgNzglLCByZ2JhKDksOSw5LDAuNDk5MDM3MTE0ODQ1OTM4NCkgMTAwJSk7XHJcbiAgICAuc2xpZGV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5zbGlkZS1Db250ZW50e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OjUlO1xyXG4gICAgICAgICAgICB0b3A6MjAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFzaWMuYnJlYWtwb2ludChzbWFsbCkgeyBcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF1dGhvcntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBiYXNpYy5icmVha3BvaW50KHNtYWxsKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtOztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgYmFzaWMuYnJlYWtwb2ludChzbWFsbCkgeyBcclxuICAgICAgICAgICAgICAgIHRvcDoxMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5vd2wtY2Fyb3VzZWx7XHJcbiAgICAuc2xpZGV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgYmFzaWMuYnJlYWtwb2ludChzbWFsbCkgeyBcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_adopt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/adopt.service */ "./src/app/service/adopt.service.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/modules/banner/banner.component.ts");
/* harmony import */ var _adoption_adoption_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adoption/adoption.component */ "./src/app/modules/adoption/adoption.component.ts");
/* harmony import */ var _lost_lost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lost/lost.component */ "./src/app/modules/lost/lost.component.ts");
/* harmony import */ var _hostpital_hostpital_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hostpital/hostpital.component */ "./src/app/modules/hostpital/hostpital.component.ts");







class HomeComponent {
    constructor(adoptService) { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_adopt_service__WEBPACK_IMPORTED_MODULE_1__["AdoptService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 29, vars: 0, consts: [[1, "jumbotron", "jumbotron-fluid", "pt-0"], [1, "container-fluid", "h-100", "text-left", "px-0"], [1, "jumbotron", "jumbotron-fluid", "adoption", "bg-transparent"], [1, "adopt-title", "text-center", "my-2"], ["src", "assets/images/title1.png", "alt", ""], ["id", "adopt"], [1, "container-fluid", "h-100", "adopt-container"], [1, "jumbotron", "jumbotron-fluid", "bg-transparent"], [1, "lost-title", "text-center", "my-2"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-search"], ["fill-rule", "evenodd", "d", "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"], ["fill-rule", "evenodd", "d", "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"], ["id", "lost"], [1, "container", "h-100", "lost-container"], [1, "hospital-title", "text-justify", "text-center", "my-2"], ["id", "hostpital"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-adoption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u5C0B\u627E\u5BF5\u7269");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-lost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u52D5\u7269\u91AB\u9662");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-hostpital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _adoption_adoption_component__WEBPACK_IMPORTED_MODULE_3__["AdoptionComponent"], _lost_lost_component__WEBPACK_IMPORTED_MODULE_4__["LostComponent"], _hostpital_hostpital_component__WEBPACK_IMPORTED_MODULE_5__["HostpitalComponent"]], styles: [".banner[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n@media (max-width: 576px) {\n  .adoption[_ngcontent-%COMP%]   .adopt-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .adoption[_ngcontent-%COMP%] {\n    margin-bottom: 100px;\n  }\n}\n.hospital-title[_ngcontent-%COMP%], .lost-title[_ngcontent-%COMP%] {\n  color: #F28322;\n}\n.owl-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 auto;\n}\n.owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbXMtc3R5bGUvYmFzaWMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQUE7QUFPQSxpQ0FBQTtBQU9BLGlDQUFBO0FDYkE7RUFDSSxhQUFBO0FBR0o7QUQyQk07RUNyQkU7SUFHUSxXQUFBO0VBSmQ7QUFDRjtBRHFCTTtFQzFCTjtJQWNRLG9CQUFBO0VBTE47QUFDRjtBQWtCQTs7RUFFSSxjRGhDVTtBQ2lCZDtBQWtCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQWZKO0FBZ0JJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBZFI7QUFnQkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFkUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gSGV4ICovXHJcbiRjb2xvci0xLWhleDogIzQ1ODZCRjtcclxuJGNvbG9yLTItaGV4OiAjM0Y4RUJGO1xyXG4kY29sb3ItMy1oZXg6ICM3N0IzRDk7XHJcbiRjb2xvci00LWhleDogI0YyODMyMjtcclxuJGNvbG9yLTUtaGV4OiAjRDkzNjExO1xyXG5cclxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gUkdCQSAqL1xyXG4kY29sb3ItMS1yZ2JhOiByZ2JhKDY4LDEzNCwxOTEsIDEpO1xyXG4kY29sb3ItMi1yZ2JhOiByZ2JhKDYzLDE0MiwxOTEsIDEpO1xyXG4kY29sb3ItMy1yZ2JhOiByZ2JhKDExOSwxNzksMjE2LCAxKTtcclxuJGNvbG9yLTQtcmdiYTogcmdiYSgyNDIsMTMxLDMzLCAxKTtcclxuJGNvbG9yLTUtcmdiYTogcmdiYSgyMTYsNTMsMTcsIDEpO1xyXG5cclxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gSFNMQSAqL1xyXG4kY29sb3ItMS1oc2xhOiBoc2xhKDIwOCwgNDgsIDUxLCAxKTtcclxuJGNvbG9yLTItaHNsYTogaHNsYSgyMDIsIDUwLCA0OSwgMSk7XHJcbiRjb2xvci0zLWhzbGE6IGhzbGEoMjAyLCA1NiwgNjUsIDEpO1xyXG4kY29sb3ItNC1oc2xhOiBoc2xhKDI4LCA4OSwgNTQsIDEpO1xyXG4kY29sb3ItNS1oc2xhOiBoc2xhKDExLCA4NSwgNDUsIDEpO1xyXG5cclxuJGNvbG9yLXdoaXRlOiNGRkZGRkY7XHJcblxyXG5cclxuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgICBAaWYgJHBvaW50ID09IGxhcmdlIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkcG9pbnQgPT0gbWVkaXVtIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkcG9pbnQgPT0gc21hbGwge1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgfSIsIkB1c2UgJy4uLy4uL3Byb2dyYW1zLXN0eWxlL2Jhc2ljLnNjc3MnO1xyXG4uYmFubmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbn1cclxuXHJcbi5hZG9wdGlvbntcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIzNiwyMzYsMjM2LDAuNjk3OTE2NjY2NjY2NjY2NykgMjUlLCByZ2JhKDIyMywyMjIsMjIyLDAuNjAyNjc4NTcxNDI4NTcxNCkgNzUlLCByZ2JhKDI1NSwyNTUsMjU1LDAuNDk5MDM3MTE0ODQ1OTM4NCkgMTAwJSk7XHJcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgLmFkb3B0LXRpdGxle1xyXG4gICAgICAgIGltZ3tcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJhc2ljLmJyZWFrcG9pbnQoc21hbGwpIHsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBiYXNpYy5icmVha3BvaW50KHNtYWxsKSB7IFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAuYWRvcHQtY29udGFpbmVye1xyXG4gICAgLy8gICAgIEBpbmNsdWRlIGJhc2ljLmJyZWFrcG9pbnQoc21hbGwpIHsgXHJcbiAgICAvLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIEBpbmNsdWRlIGJhc2ljLmJyZWFrcG9pbnQobWVkaXVtKSB7IFxyXG4gICAgLy8gICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgXHJcbn1cclxuLmhvc3BpdGFsLXRpdGxlLFxyXG4ubG9zdC10aXRsZXtcclxuICAgIGNvbG9yOiBiYXNpYy4kY29sb3ItNC1oZXg7XHJcbn1cclxuXHJcbi5vd2wtbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLm93bC1wcmV2e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC5vd2wtbmV4dHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _service_adopt_service__WEBPACK_IMPORTED_MODULE_1__["AdoptService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/hostpital/hostpital.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/hostpital/hostpital.component.ts ***!
  \**********************************************************/
/*! exports provided: HostpitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostpitalComponent", function() { return HostpitalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _service_hospital_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/hospital.service */ "./src/app/service/hospital.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






function HostpitalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u91AB\u5E2B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u5B57\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u96FB\u8A71");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.doctor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.certificateNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.tel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.iconFaMapMarked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.google.com.tw/maps/place/", item_r1.address, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.address);
} }
class HostpitalComponent {
    constructor(hospitalService) {
        this.hospitalService = hospitalService;
        this.iconFaMapMarked = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarked"];
    }
    ngOnInit() {
        this.getInfo();
    }
    //https://www.google.com.tw/maps/place
    getInfo() {
        this.hospitalService.getHostpital().subscribe(data => {
            let info = [];
            for (let i = 0; i < 9; i++) {
                let random = Math.floor(Math.random() * 9) + 1;
                info.push(data[random]);
            }
            this.hospitalInfo = info;
        });
    }
}
HostpitalComponent.ɵfac = function HostpitalComponent_Factory(t) { return new (t || HostpitalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hospital_service__WEBPACK_IMPORTED_MODULE_2__["HospitalService"])); };
HostpitalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HostpitalComponent, selectors: [["app-hostpital"]], decls: 5, vars: 1, consts: [[1, "text-right", "py-2"], [1, "btn", "btn", "btn-outline-info", 3, "click"], [1, "row"], ["class", "card col-12 col-md-4 mb-4", 4, "ngFor", "ngForOf"], [1, "card", "col-12", "col-md-4", "mb-4"], ["type", "button", 1, "btn", "btn-outline-primary", "status"], [1, "card-header"], [1, "table", "table-border"], ["colspan", "2"], [1, "pr-2", "iconFaMapMarked", 3, "icon"], ["target", "_blank", 3, "href"]], template: function HostpitalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HostpitalComponent_Template_button_click_1_listener() { return ctx.getInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HostpitalComponent_div_4_Template, 27, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hospitalInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  background-color: green;\n  padding: 5px;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #77B3D9;\n  color: white;\n}\n.iconFaMapMarked[_ngcontent-%COMP%] {\n  color: #F28322;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbXMtc3R5bGUvYmFzaWMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob3N0cGl0YWwvaG9zdHBpdGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBT0EsaUNBQUE7QUFPQSxpQ0FBQTtBQ1pBO0VBQ0ksa0JBQUE7QUFFSjtBQURJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFHUjtBQUFJO0VBQ0kseUJEWE07RUNZTixZQUFBO0FBRVI7QUFFQTtFQUNJLGNEaEJVO0FDaUJkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob3N0cGl0YWwvaG9zdHBpdGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gSGV4ICovXHJcbiRjb2xvci0xLWhleDogIzQ1ODZCRjtcclxuJGNvbG9yLTItaGV4OiAjM0Y4RUJGO1xyXG4kY29sb3ItMy1oZXg6ICM3N0IzRDk7XHJcbiRjb2xvci00LWhleDogI0YyODMyMjtcclxuJGNvbG9yLTUtaGV4OiAjRDkzNjExO1xyXG5cclxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gUkdCQSAqL1xyXG4kY29sb3ItMS1yZ2JhOiByZ2JhKDY4LDEzNCwxOTEsIDEpO1xyXG4kY29sb3ItMi1yZ2JhOiByZ2JhKDYzLDE0MiwxOTEsIDEpO1xyXG4kY29sb3ItMy1yZ2JhOiByZ2JhKDExOSwxNzksMjE2LCAxKTtcclxuJGNvbG9yLTQtcmdiYTogcmdiYSgyNDIsMTMxLDMzLCAxKTtcclxuJGNvbG9yLTUtcmdiYTogcmdiYSgyMTYsNTMsMTcsIDEpO1xyXG5cclxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gSFNMQSAqL1xyXG4kY29sb3ItMS1oc2xhOiBoc2xhKDIwOCwgNDgsIDUxLCAxKTtcclxuJGNvbG9yLTItaHNsYTogaHNsYSgyMDIsIDUwLCA0OSwgMSk7XHJcbiRjb2xvci0zLWhzbGE6IGhzbGEoMjAyLCA1NiwgNjUsIDEpO1xyXG4kY29sb3ItNC1oc2xhOiBoc2xhKDI4LCA4OSwgNTQsIDEpO1xyXG4kY29sb3ItNS1oc2xhOiBoc2xhKDExLCA4NSwgNDUsIDEpO1xyXG5cclxuJGNvbG9yLXdoaXRlOiNGRkZGRkY7XHJcblxyXG5cclxuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgICBAaWYgJHBvaW50ID09IGxhcmdlIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkcG9pbnQgPT0gbWVkaXVtIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkcG9pbnQgPT0gc21hbGwge1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgfSIsIkB1c2UgJy4uLy4uL3Byb2dyYW1zLXN0eWxlL2Jhc2ljLnNjc3MnO1xyXG5cclxuLmNhcmR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuc3RhdHVze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MTBweDtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiYXNpYy4kY29sb3ItMy1oZXg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uRmFNYXBNYXJrZWR7XHJcbiAgICBjb2xvcjogYmFzaWMuJGNvbG9yLTQtaGV4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostpitalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hostpital',
                templateUrl: './hostpital.component.html',
                styleUrls: ['./hostpital.component.scss']
            }]
    }], function () { return [{ type: _service_hospital_service__WEBPACK_IMPORTED_MODULE_2__["HospitalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/lost/lost.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/lost/lost.component.ts ***!
  \************************************************/
/*! exports provided: LostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostComponent", function() { return LostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_lost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/lost.service */ "./src/app/service/lost.service.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function LostComponent_div_2_Template_img_error_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleImageError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u540D\u5B57");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u7A2E\u985E/\u6027\u5225");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u8D70\u5931\u65E5\u671F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u8D70\u5931\u5730\u9EDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u806F\u7D61\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u96FB\u8A71");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.icnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.petname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r1.petKind, "/", item_r1.petsex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.misstime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.misslocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.tel);
} }
const _c0 = function () { return ["owl-theme", "sliding"]; };
class LostComponent {
    constructor(httpClient, lostService) {
        this.httpClient = httpClient;
        this.lostService = lostService;
        this.isImageLoading = true;
        this.angleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"];
        this.angleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleRight"];
        this.owlCarouselOptions = {
            items: 3,
            dots: true,
            navigation: false,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: false,
            loop: true,
            autoHeight: true,
            margin: 5,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        };
    }
    ngOnInit() {
        this.getTop30();
    }
    getTop30() {
        this.httpClient.get("assets/data/animalMissing.json").subscribe(data => {
            let hasImage = data.filter(x => x.PICTURE != '');
            let info = [];
            for (let i = 0; i < 10; i++) {
                let random = Math.floor(Math.random() * hasImage.length) + 1;
                info.push(hasImage[random]);
            }
            this.lostPromote = info;
        });
    }
    handleImageError(event) {
        event.target.src = 'assets/images/pet.png';
    }
}
LostComponent.ɵfac = function LostComponent_Factory(t) { return new (t || LostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_lost_service__WEBPACK_IMPORTED_MODULE_3__["LostService"])); };
LostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LostComponent, selectors: [["app-lost"]], decls: 3, vars: 5, consts: [[1, "row", "justify-content-center"], [1, "owl-carousel", "banner", 2, "display", "block", 3, "items", "options", "carouselClasses"], ["class", "item card", 4, "ngFor", "ngForOf"], [1, "item", "card"], ["alt", "Pet", 1, "card-img-top", 3, "src", "error"], [1, "card-body", "text-center"], ["type", "button", "title", "\u6676\u7247\u865F\u78BC", 1, "btn", "btn-outline-primary"], [1, "text-center", "table-bordered", "w-100"], [1, "table-primary"]], template: function LostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LostComponent_div_2_Template, 36, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.lostPromote)("options", ctx.owlCarouselOptions)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lostPromote);
    } }, directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  object-fit: contain;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb3N0L2xvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9zdC9sb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lost',
                templateUrl: './lost.component.html',
                styleUrls: ['./lost.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _service_lost_service__WEBPACK_IMPORTED_MODULE_3__["LostService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



class NavbarComponent {
    constructor() {
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"];
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 20, vars: 0, consts: [[1, "header", "fixed-top"], [1, "container-fluid", "px-0"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "/index", 1, "brand"], ["src", "assets/images/logo.svg", "alt", "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#adopt", 1, "nav-link"], ["href", "#hostpital", 1, "nav-link"], [1, "nav-item", "active"], ["href", "#lost", 1, "nav-link"], [1, "sr-only"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u52D5\u7269\u9818\u990A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u52D5\u7269\u91AB\u9662");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5C0B\u627E\u5BF5\u7269");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #F28322;\n  border-bottom: 2px solid #F28322;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbXMtc3R5bGUvYmFzaWMuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQU9BLGlDQUFBO0FBT0EsaUNBQUE7QUNYSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ1I7QUFNWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBSGhCO0FBS2dCO0VBQ0ksY0RiTjtFQ2NNLGdDQUFBO0FBSHBCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIEhleCAqL1xyXG4kY29sb3ItMS1oZXg6ICM0NTg2QkY7XHJcbiRjb2xvci0yLWhleDogIzNGOEVCRjtcclxuJGNvbG9yLTMtaGV4OiAjNzdCM0Q5O1xyXG4kY29sb3ItNC1oZXg6ICNGMjgzMjI7XHJcbiRjb2xvci01LWhleDogI0Q5MzYxMTtcclxuXHJcbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIFJHQkEgKi9cclxuJGNvbG9yLTEtcmdiYTogcmdiYSg2OCwxMzQsMTkxLCAxKTtcclxuJGNvbG9yLTItcmdiYTogcmdiYSg2MywxNDIsMTkxLCAxKTtcclxuJGNvbG9yLTMtcmdiYTogcmdiYSgxMTksMTc5LDIxNiwgMSk7XHJcbiRjb2xvci00LXJnYmE6IHJnYmEoMjQyLDEzMSwzMywgMSk7XHJcbiRjb2xvci01LXJnYmE6IHJnYmEoMjE2LDUzLDE3LCAxKTtcclxuXHJcbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIEhTTEEgKi9cclxuJGNvbG9yLTEtaHNsYTogaHNsYSgyMDgsIDQ4LCA1MSwgMSk7XHJcbiRjb2xvci0yLWhzbGE6IGhzbGEoMjAyLCA1MCwgNDksIDEpO1xyXG4kY29sb3ItMy1oc2xhOiBoc2xhKDIwMiwgNTYsIDY1LCAxKTtcclxuJGNvbG9yLTQtaHNsYTogaHNsYSgyOCwgODksIDU0LCAxKTtcclxuJGNvbG9yLTUtaHNsYTogaHNsYSgxMSwgODUsIDQ1LCAxKTtcclxuXHJcbiRjb2xvci13aGl0ZTojRkZGRkZGO1xyXG5cclxuXHJcbkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICRwb2ludCA9PSBsYXJnZSB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHBvaW50ID09IG1lZGl1bSB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHBvaW50ID09IHNtYWxsIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gIH0iLCJAdXNlICcuLi9wcm9ncmFtcy1zdHlsZS9iYXNpYy5zY3NzJztcclxuXHJcbi5icmFuZHtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgICAubmF2YmFyLW5hdntcclxuICAgICAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJhc2ljLiRjb2xvci00LWhleDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmFzaWMuJGNvbG9yLTQtaGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipe/adopt/sterilization.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipe/adopt/sterilization.pipe.ts ***!
  \**************************************************/
/*! exports provided: SterilizationPipe, BodyTypePipe, BacterinPipe, Sex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SterilizationPipe", function() { return SterilizationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyTypePipe", function() { return BodyTypePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacterinPipe", function() { return BacterinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sex", function() { return Sex; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SterilizationPipe {
    transform(value) {
        let result = '未輸入';
        switch (value) {
            case 'T':
                result = '是';
                break;
            case 'F':
                result = '否';
                break;
        }
        return result;
    }
}
SterilizationPipe.ɵfac = function SterilizationPipe_Factory(t) { return new (t || SterilizationPipe)(); };
SterilizationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sterilization", type: SterilizationPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SterilizationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sterilization'
            }]
    }], null, null); })();
class BodyTypePipe {
    transform(value) {
        let result = '';
        switch (value) {
            case 'SMALL':
                result = '小型';
                break;
            case 'MEDIUM':
                result = '中型';
                break;
            case 'BIG':
                result = '大型';
                break;
        }
        return result;
    }
}
BodyTypePipe.ɵfac = function BodyTypePipe_Factory(t) { return new (t || BodyTypePipe)(); };
BodyTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bodyType", type: BodyTypePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyTypePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'bodyType'
            }]
    }], null, null); })();
class BacterinPipe {
    transform(value) {
        let result = '未輸入';
        switch (value) {
            case 'T':
                result = '是';
                break;
            case 'F':
                result = '否';
                break;
        }
        return result;
    }
}
BacterinPipe.ɵfac = function BacterinPipe_Factory(t) { return new (t || BacterinPipe)(); };
BacterinPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bacterin", type: BacterinPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BacterinPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'bacterin'
            }]
    }], null, null); })();
class Sex {
    transform(value) {
        let result = '未輸入';
        switch (value) {
            case 'M':
                result = '公';
                break;
            case 'F':
                result = '母';
                break;
        }
        return result;
    }
}
Sex.ɵfac = function Sex_Factory(t) { return new (t || Sex)(); };
Sex.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sex", type: Sex, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sex, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sex'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/routing/base/base-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/routing/base/base-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_sharedlayout_sharedlayout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_shared/sharedlayout/sharedlayout.component */ "./src/app/_shared/sharedlayout/sharedlayout.component.ts");
/* harmony import */ var _modules_adoption_adoption_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/adoption/adoption.component */ "./src/app/modules/adoption/adoption.component.ts");
/* harmony import */ var _modules_hostpital_hostpital_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/hostpital/hostpital.component */ "./src/app/modules/hostpital/hostpital.component.ts");
/* harmony import */ var _modules_lost_lost_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/lost/lost.component */ "./src/app/modules/lost/lost.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/home/home.component */ "./src/app/modules/home/home.component.ts");









const routes = [{
        path: '',
        component: _shared_sharedlayout_sharedlayout_component__WEBPACK_IMPORTED_MODULE_2__["SharedlayoutComponent"],
        children: [
            {
                path: '',
                component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] // child route component that the router renders
            },
            {
                path: 'adopt',
                component: _modules_adoption_adoption_component__WEBPACK_IMPORTED_MODULE_3__["AdoptionComponent"] // child route component that the router renders
            },
            {
                path: 'hospital',
                component: _modules_hostpital_hostpital_component__WEBPACK_IMPORTED_MODULE_4__["HostpitalComponent"] // another child route component that the router renders
            },
            {
                path: 'lost',
                component: _modules_lost_lost_component__WEBPACK_IMPORTED_MODULE_5__["LostComponent"] // another child route component that the router renders
            }
        ]
    }];
class BaseRoutingModule {
}
BaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BaseRoutingModule });
BaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BaseRoutingModule_Factory(t) { return new (t || BaseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/adopt.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/adopt.service.ts ***!
  \******************************************/
/*! exports provided: AdoptService, Adoption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptService", function() { return AdoptService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adoption", function() { return Adoption; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AdoptService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    GetAll() {
        this.httpClient.get("../../../assets/data/animalAdopt.json").subscribe(data => {
            return data;
        });
    }
    GetTop30() {
        let adoptionPromote = [];
        this.httpClient.get("../../../assets/data/animalAdopt.json").subscribe(data => {
            let hasImage = data.filter(x => x.album_file != '');
            let info = [];
            for (let i = 0; i < 30; i++) {
                let random = Math.floor(Math.random() * 30) + 1;
                info.push(hasImage[random]);
            }
            adoptionPromote = info;
        });
        return adoptionPromote;
    }
}
AdoptService.ɵfac = function AdoptService_Factory(t) { return new (t || AdoptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdoptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdoptService, factory: AdoptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdoptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
class Adoption {
}


/***/ }),

/***/ "./src/app/service/hospital.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/hospital.service.ts ***!
  \*********************************************/
/*! exports provided: HospitalService, HospitalInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalService", function() { return HospitalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalInfo", function() { return HospitalInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class HospitalService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHostpital() {
        return this.httpClient.get("assets/data/animalHostpital.json");
    }
}
HospitalService.ɵfac = function HospitalService_Factory(t) { return new (t || HospitalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HospitalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HospitalService, factory: HospitalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HospitalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
class HospitalInfo {
}


/***/ }),

/***/ "./src/app/service/lost.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/lost.service.ts ***!
  \*****************************************/
/*! exports provided: LostService, LostPet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostService", function() { return LostService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPet", function() { return LostPet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class LostService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getImage(imageUrl) {
        return this.httpClient.get(imageUrl, { responseType: 'blob' });
    }
}
LostService.ɵfac = function LostService_Factory(t) { return new (t || LostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LostService, factory: LostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
class LostPet {
}


/***/ }),

/***/ "./src/app/service/utility.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/utility.service.ts ***!
  \********************************************/
/*! exports provided: UtilityService, ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UtilityService {
    constructor() { }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(); };
UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class ApiInterceptor {
    intercept(req, next) {
        const baseUrl = document.getElementsByTagName('base')[0].href;
        const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
        console.log(apiReq);
        return next.handle(apiReq);
    }
}
ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) { return new (t || ApiInterceptor)(); };
ApiInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiInterceptor, factory: ApiInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\Github\lovedog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map