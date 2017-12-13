webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: gainsboro;\r\n}\r\n\r\n.app-header {\r\n  background-color: gainsboro;\r\n  position:fixed;\r\n  min-width: 100%;\r\n  height: 50px;\r\n  top:0px;\r\n  left:0px;\r\n  margin:0;\r\n  z-index:99;\r\n}\r\n\r\n.app-footer {\r\n  background-color: gainsboro;\r\n  min-width: 100%;\r\n  height: 50px;\r\n  position: fixed;\r\n  bottom: 0px;\r\n  left:0px;\r\n}\r\n\r\n.app-container {\r\n  padding: 0;\r\n  margin: 0px;\r\n  position: inherit;\r\n}\r\n\r\n.app-maintitel {\r\n  margin:0 15px 0 15px;\r\n}\r\n\r\n.app-content {\r\n  min-height: 827px;\r\n}\r\n\r\n.app-mainarea{\r\n  position:relative;\r\n  top:50px;\r\n  margin-bottom:50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header row d-flex justify-content-between\">\r\n  <div class=\"dropdown\">\r\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      Menü\r\n      <i class=\"fa fa-bars\"></i>\r\n    </button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n      <a class=\"dropdown-item\" routerLink=\"/\">HOME</a>\r\n      <a class=\"dropdown-item\" routerLink=\"/rezeptliste\">LISTE</a>\r\n      <a class=\"dropdown-item\" routerLink=\"/rezepteerfassen\">ERFASSEN</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <h1 class=\"h1 text-center app-maintitel\">\r\n      MIKE'S REZEPTE\r\n    </h1>\r\n  </div>\r\n  <div></div>\r\n</div>\r\n<div class=\"app-mainarea\">\r\n  <div class=\"app-container container-fluid\">\r\n    <div class=\"app-container row\">\r\n      <div class=\"col-2 app-panel-left bg-dark\">\r\n      </div>\r\n      <div class=\"col app-content bg-light\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n      <div class=\"col-2 bg-dark\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"app-footer\">\r\n  FOOTER\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rezept_rezept_service__ = __webpack_require__("./src/app/rezept/rezept.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        console.log('AppComponent started...');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__rezept_rezept_service__["a" /* RezeptService */]]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rezept_detail_rezept_detail_component__ = __webpack_require__("./src/app/rezept-detail/rezept-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rezept_liste_rezept_liste_component__ = __webpack_require__("./src/app/rezept-liste/rezept-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rezept_erfassen_rezept_erfassen_component__ = __webpack_require__("./src/app/rezept-erfassen/rezept-erfassen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rezept_home_rezept_home_component__ = __webpack_require__("./src/app/rezept-home/rezept-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_redux_store__ = __webpack_require__("./src/app/common/redux/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var appRoutes = [
    { path: 'rezeptliste', component: __WEBPACK_IMPORTED_MODULE_6__rezept_liste_rezept_liste_component__["a" /* RezeptListeComponent */], data: { title: 'Rezeptliste -  Titel' } },
    { path: 'rezept/:id', component: __WEBPACK_IMPORTED_MODULE_5__rezept_detail_rezept_detail_component__["a" /* RezeptComponent */], data: { title: 'Rezept -  Titel' } },
    { path: 'rezepteerfassen', component: __WEBPACK_IMPORTED_MODULE_7__rezept_erfassen_rezept_erfassen_component__["a" /* RezeptErfassenComponent */], data: { title: 'Rezept Erfassen -  Titel' } },
    { path: 'rezepteerfassen/:id', component: __WEBPACK_IMPORTED_MODULE_7__rezept_erfassen_rezept_erfassen_component__["a" /* RezeptErfassenComponent */], data: { title: 'Rezept Erfassen -  Titel2' } },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__rezept_home_rezept_home_component__["a" /* RezeptHomeComponent */], data: { title: 'HOME -  Titel' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], data: { title: 'IRGENDWAS -  Titel' } }
];
var AppModule = (function () {
    function AppModule(ngRedux, devTools) {
        var storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_11__common_redux_store__["a" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_11__common_redux_store__["b" /* INITIAL_STATE */], [], storeEnhancers);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__rezept_detail_rezept_detail_component__["a" /* RezeptComponent */],
            __WEBPACK_IMPORTED_MODULE_6__rezept_liste_rezept_liste_component__["a" /* RezeptListeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__rezept_erfassen_rezept_erfassen_component__["a" /* RezeptErfassenComponent */],
            __WEBPACK_IMPORTED_MODULE_8__rezept_home_rezept_home_component__["a" /* RezeptHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__["NgReduxModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__["DevToolsExtension"]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/common/redux/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECREMENT; });
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./src/app/common/redux/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/app/common/redux/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;


var INITIAL_STATE = {
    counter: 0
};
function rootReducer(state, action) {
    console.log(">>>> roorReducer()", action, state);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* INCREMENT */]:
            console.log(">>>> case INCREMENT");
            return { counter: state.counter + 1 };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* DECREMENT */]:
            console.log(">>>> case DECREMENT");
            return { counter: state.counter - 1 };
    }
    //Default: alter State zurueckgeben
    return state;
}
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n !! PAGE NOT FOUND !!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "./src/app/rezept-detail/rezept-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-detail-image {\r\n  height: 10rem;\r\n}\r\n\r\n.app-anzahl-personen {\r\n  max-width: 10%\r\n}\r\n\r\n.zubereitung {\r\n  min-height: 15em;\r\n}\r\n\r\n#naehrwerte{\r\n  color:inherit;\r\n}\r\n\r\nli > span {\r\n  float:right;\r\n}\r\n\r\n/*#detail_content {*/\r\n  /*min-height: 750px;*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/rezept-detail/rezept-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div id=\"detail_content\">\r\n    <div class=\"mb-4\">\r\n      <h1 class=\"h1 text-center mt-4\">\r\n        {{(rezept$ | async)?.titel}}\r\n      </h1>\r\n      <div class=\"text-center\">\r\n        <img class=\"app-detail-image\" src={{(rezept$|async)?.imageFilename}}>\r\n      </div>\r\n      <h2 class=\"h2 text-center mt-3\">\r\n        {{(rezept$ | async)?.beschreibung}}\r\n      </h2>\r\n    </div>\r\n    <div id=\"printArea\">\r\n      <div class=\"container mt-4\" id=\"detail_container\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div>\r\n              <h4 class=\"h4 text-center\">\r\n                Anzahl Personen\r\n              </h4>\r\n              <div id=\"input_div\" class=\"text-center\">\r\n                <input type=\"button\" value=\"-\" id=\"moins\"\r\n                       (click)=\"gewunschteAnzahlPersonen = gewunschteAnzahlPersonen - 1\">\r\n                <input class=\"app-anzahl-personen text-center\" id=\"gewuenschteAnzalPersonen\" type=\"text\"\r\n                       name=\"gewunschteAnzahlPersonen\"\r\n                       [(ngModel)]=\"gewunschteAnzahlPersonen\" ng-init=\"gewunschteAnzahlPersonen=1\">\r\n                <input type=\"button\" value=\"+\" id=\"plus\"\r\n                       (click)=\"gewunschteAnzahlPersonen = gewunschteAnzahlPersonen + 1\">\r\n              </div>\r\n              <div *ngIf=\"(rezept$ | async)?.zutaten?.length > 0\">\r\n                <h4 class=\"h4 text-center mt-4\">\r\n                  Zutaten\r\n                </h4>\r\n                <ul class=\"list-group\">\r\n                  <li *ngFor=\"let zutat of (rezept$ | async)?.zutaten; let i = index;\" class=\"list-group-item\">\r\n                    <div>\r\n                      {{((gewunschteAnzahlPersonen)/((rezept$ | async)?.zutaten.length)) * (zutat?.menge)}}\r\n                      {{zutat?.einheit}}\r\n                      {{zutat?.zutat}}\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"mt-4\" id=\"accordion\" role=\"tablist\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n                  <h5 class=\"mb-0\">\r\n                    <a id=\"naehrwerte\" data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\"\r\n                       aria-controls=\"collapseOne\">\r\n                      Nährwerte +\r\n                      <!--<i class=\"fa fa-plus-circle\"></i>-->\r\n                    </a>\r\n                  </h5>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"collapse hidden\" role=\"tabpanel\" aria-labelledby=\"headingOne\"\r\n                     data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n                    <ul class=\"no-list-type no-padding\">\r\n                      <li>\r\n                        Kalorien in kcal:\r\n                        <span>{{(rezept$ | async)?.naehrwerte?.kalorien|number}}</span>\r\n                      </li>\r\n                      <li>\r\n                        Kohlenhydrate:\r\n                        <span>{{(rezept$ | async)?.naehrwerte?.kohlenhydrate|number}}</span>\r\n                      </li>\r\n                      <li>\r\n                        Eiweiss:\r\n                        <span>{{(rezept$ | async)?.naehrwerte?.eiweiss|number}}</span>\r\n                      </li>\r\n                      <li>\r\n                        Fett:\r\n                        <span>{{(rezept$ | async)?.naehrwerte?.fett|number}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h4>\r\n              Zubereitung\r\n            </h4>\r\n            <textarea class=\"zubereitung form-control\">\r\n            {{(rezept$ | async)?.zubereitung}}\r\n          </textarea>\r\n            <h5 class=\"h5 mt-4\">\r\n              Zeit: {{(rezept$ | async)?.zeit}} min\r\n            </h5>\r\n            <h5 class=\"h5 mt-1\">\r\n              Schwierigkeitsgrad: {{getTranslationSchwierigkeitsgrad((rezept$ | async)?.schwierigkeitsgrad)}}\r\n            </h5>\r\n            <h5 class=\"h5 mt-1\">\r\n              Art: {{getTranslationArt((rezept$ | async)?.art)}}\r\n            </h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-center mt-4\">\r\n    <input type=\"button\" class=\"btn btn-primary\" value=\"Drucken\" (click)=\"printIt('printArea')\">\r\n    <input type=\"button\" class=\"btn btn-secondary\" value=\"Löschen\" (click)=\"deleteRezept(rezept$)\">\r\n    <input type=\"button\" class=\"btn btn-secondary\" value=\"Bearbeiten\" (click)=\"editRezept(rezept$)\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rezept-detail/rezept-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rezept_rezept_service__ = __webpack_require__("./src/app/rezept/rezept.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rezept_dto_model_interfaces__ = __webpack_require__("./src/app/rezept/dto/model-interfaces.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RezeptComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RezeptComponent = (function () {
    function RezeptComponent(route, router, rezeptService) {
        this.route = route;
        this.router = router;
        this.rezeptService = rezeptService;
        this.model = __WEBPACK_IMPORTED_MODULE_3__rezept_dto_model_interfaces__;
        this.gewunschteAnzahlPersonen = 1;
        this.mylogger('RezeptComponent');
    }
    RezeptComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnIniti');
        this.routeSubscription = this.route.params.subscribe(function (params) {
            var id = (params['id'] || '');
            _this.rezept$ = _this.rezeptService.loadRezept(id);
            console.log('Rezept mit Id: ', id, ' holen');
        });
    };
    RezeptComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    RezeptComponent.prototype.editRezept = function (rezept$) {
        var _this = this;
        rezept$.subscribe(function (rezept) {
            console.log('Id= ', rezept._id);
            _this.router.navigate(['/rezepteerfassen/' + rezept._id]);
        });
    };
    RezeptComponent.prototype.deleteRezept = function (rezept$) {
        var _this = this;
        rezept$.subscribe(function (rezept) {
            console.log("Rezept loeschen mit Id= ", rezept._id);
            _this.rezeptService.deleteRezept(rezept._id).subscribe(function () {
                console.log("Rezept erfolgreich geloescht");
                _this.router.navigate(['/rezeptliste/']);
            });
        });
    };
    RezeptComponent.prototype.getTranslationSchwierigkeitsgrad = function (name) {
        for (var elem in __WEBPACK_IMPORTED_MODULE_3__rezept_dto_model_interfaces__["schwierigkeitsgrad"]) {
            if (__WEBPACK_IMPORTED_MODULE_3__rezept_dto_model_interfaces__["schwierigkeitsgrad"][elem].name == name) {
                return __WEBPACK_IMPORTED_MODULE_3__rezept_dto_model_interfaces__["schwierigkeitsgrad"][elem].value;
            }
        }
        return null;
    };
    RezeptComponent.prototype.getTranslationArt = function (name) {
        for (var elem in __WEBPACK_IMPORTED_MODULE_3__rezept_dto_model_interfaces__["art"]) {
            if (__WEBPACK_IMPORTED_MODULE_3__rezept_dto_model_interfaces__["art"][elem].name == name) {
                return __WEBPACK_IMPORTED_MODULE_3__rezept_dto_model_interfaces__["art"][elem].value;
            }
        }
        return null;
    };
    RezeptComponent.prototype.printIt = function (divId) {
        /*
        var printContents = document.getElementById(divId).innerHTML;
        var popupWin = window.open('', '_blank', 'width=800,height=600');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
      */
        //window.print();
    };
    RezeptComponent.prototype.mylogger = function (text) {
        console.log(text);
    };
    return RezeptComponent;
}());
RezeptComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rezept',
        template: __webpack_require__("./src/app/rezept-detail/rezept-detail.component.html"),
        styles: [__webpack_require__("./src/app/rezept-detail/rezept-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__rezept_rezept_service__["a" /* RezeptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rezept_rezept_service__["a" /* RezeptService */]) === "function" && _c || Object])
], RezeptComponent);

var _a, _b, _c;
//# sourceMappingURL=rezept-detail.component.js.map

/***/ }),

/***/ "./src/app/rezept-erfassen/rezept-erfassen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zubereitung {\r\n  min-height: 10em;\r\n}\r\n\r\n.ng-touched.ng-invalid {\r\n  border-color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/rezept-erfassen/rezept-erfassen.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form novalidate #rezepteForm=\"ngForm\" class=\"form_erfassen form-group\"\r\n        name=\"form_erfassen\">\r\n    <div class=\"form-group\">\r\n      <label class=\"col-form-label\">Titel</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"titel\" name=\"titel\" #title=\"ngModel\" [(ngModel)]=\"rezept.titel\"\r\n             required minlength=\"5\"\r\n             placeholder=\"Titel\">\r\n      <div *ngIf=\"!title.control.valid && title.control.touched\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"title.control.hasError('required')\">\r\n          Der Titel ist erforderlich\r\n        </div>\r\n        <div *ngIf=\"title.control.hasError('minlength')\">\r\n          Der Titel muss mindestens {{title.control.getError('minlength').requiredLength}} Zeichen haben\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"col-form-label\">Beschreibung</label>\r\n      <input type=\"textarea\" class=\"form-control\" id=\"beschreibung\" name=\"beschreibung\" #beschreibung=\"ngModel\"\r\n             [(ngModel)]=\"rezept.beschreibung\" placeholder=\"Beschreibung\" required>\r\n      <div *ngIf=\"!beschreibung.control.valid && beschreibung.control.touched\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"beschreibung.control.hasError('required')\">\r\n          Die Beschreibung ist erforderlich\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"\">Schwierigkeitsgrad</label>\r\n      <select name=\"schwierigkeitsgrad\" [(ngModel)]=\"rezept.schwierigkeitsgrad\" class=\"form-control\">\r\n        <option value=\"\">--- Bitte auswählen ---</option>\r\n        <option *ngFor=\"let grad of model.schwierigkeitsgrad\" class=\"\" [ngValue]=\"grad.name\">\r\n          {{grad.value}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Art</label>\r\n      <div class=\"radio\" *ngFor=\"let art of model.art\">\r\n        <label>\r\n          <input type=\"radio\" name=\"art\" [(ngModel)]=\"rezept.art\" [value]=\"art.name\" required>\r\n          {{art.value}}\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"\">Zeit in min</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"zeit\" name=\"zeit\" [(ngModel)]=\"rezept.zeit\"\r\n             required min=\"0\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Zubereitung</label>\r\n      <textarea class=\"form-control zubereitung\" id=\"zubereitung2\" name=\"zubereitung\"\r\n                [(ngModel)]=\"rezept.zubereitung\"\r\n                required placeholder=\"Zubereitung\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Anzahl Personen</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"zutatenAnzahl\" name=\"zutatenAnzahl\" #zutatenAnzahl=\"ngModel\"\r\n             [(ngModel)]=\"rezept.zutatenAnzahl\" required>\r\n      <div *ngIf=\"!zutatenAnzahl.control.valid && zutatenAnzahl.control.touched\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"zutatenAnzahl.control.hasError('required')\">\r\n          Die Anzahl Personen ist erforderlich\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"zutaten\" class=\"form-group\">\r\n      <label>Zutaten</label>\r\n      <div *ngFor=\"let element of rezept.zutaten; let i = index;\" class=\"mt-4\">\r\n        <label>Zutat {{i+1}}</label>\r\n        <button class=\"btn btn-danger\" (click)=\"removeZutat(i)\">\r\n          Zutat löschen\r\n        </button>\r\n        <br>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <label>Menge</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"menge\" name=\"menge_{{i}}\"\r\n                     [(ngModel)]=\"element.menge\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <label>Einheit</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"einheit\" name=\"einheit_{{i}}\"\r\n                     [(ngModel)]=\"element.einheit\">\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <label>Zutat</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"zutat\" name=\"zutat_{{i}}\"\r\n                     [(ngModel)]=\"element.zutat\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <button class=\"btn btn-success\" (click)=\"addZutat()\">\r\n        Zutat hinzufügen\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"rezept.naehrwerte\">\r\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n        Nähwerte\r\n      </button>\r\n      <div class=\"collapse\" id=\"collapseExample\">\r\n        <div class=\"card card-body\">\r\n          <label>Kalorien</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"kalorien\" name=\"kalorien\" #kalorien=\"ngModel\"\r\n                 [(ngModel)]=\"rezept.naehrwerte.kalorien\" min=\"0\">\r\n          <label>Fett</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"fett\" name=\"fett\" #fett=\"ngModel\"\r\n                 [(ngModel)]=\"rezept.naehrwerte.fett\" min=\"0\">\r\n          <label>Eiweiss</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"eiweiss\" name=\"eiweiss\" #eiweiss=\"ngModel\"\r\n                 [(ngModel)]=\"rezept.naehrwerte.eiweiss\" min=\"0\">\r\n          <label>Kohlenhydrate</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"kohlenhydrate\" name=\"kohlenhydrate\" #kohlenhydrate=\"ngModel\"\r\n                 [(ngModel)]=\"rezept.naehrwerte.kohlenhydrate\" min=\"0\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n    <div class=\"form-group\">\r\n      <label>Image Filename (Muss im Verzeichnis <b>\"E:\\web_entwicklung\\rezepteApp2\\RezepteApp2\\src\\assets\\images\"</b> liegen)</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"imageFilename\" name=\"imageFilename\"\r\n             [(ngModel)]=\"rezept.imageFilename\" readonly>\r\n      <input type=\"file\" class=\"form-control-file\" (change)=\"onFileChange($event)\" accept=\".jpg, .jpeg, .png\"/>\r\n    </div>\r\n    <br>\r\n    <input type=\"button\" class=\"btn btn-primary\" value=\"Speichern\" id=\"speichern\" (click)=\"saveRezept(rezept)\">\r\n    <br>\r\n    <!--<input type=\"button\" class=\"btn btn-secondary\" value=\"Image Speichern\" id=\"imageSpeichern\"-->\r\n    <!--(click)=\"saveImage('TEST')\">-->\r\n    <!--<br>-->\r\n    <!--<input type=\"button\" class=\"btn btn-secondary\" value=\"Image holen\" id=\"imageLaden\" (click)=\"loadImage('TEST')\">-->\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rezept-erfassen/rezept-erfassen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rezept_dto_zutat__ = __webpack_require__("./src/app/rezept/dto/zutat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rezept_dto_rezept__ = __webpack_require__("./src/app/rezept/dto/rezept.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rezept_rezept_service__ = __webpack_require__("./src/app/rezept/rezept.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rezept_dto_model_interfaces__ = __webpack_require__("./src/app/rezept/dto/model-interfaces.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RezeptErfassenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RezeptErfassenComponent = (function () {
    function RezeptErfassenComponent(route, rezeptService) {
        this.route = route;
        this.rezeptService = rezeptService;
        this.model = __WEBPACK_IMPORTED_MODULE_5__rezept_dto_model_interfaces__;
    }
    RezeptErfassenComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit !');
        this.rezept = new __WEBPACK_IMPORTED_MODULE_3__rezept_dto_rezept__["a" /* Rezept */](); //Zum Erzeugen mal ein leeres Rezept !
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.id = (params['id'] || '');
            if (_this.id) {
                console.log('Rezept mit Id: ', _this.id, ' holen');
                _this.rezeptService.loadRezept(_this.id).subscribe(function (rezept) {
                    _this.rezept = rezept;
                });
            }
            else {
                console.log('Rezept neu erfassen');
                _this.rezept = new __WEBPACK_IMPORTED_MODULE_3__rezept_dto_rezept__["a" /* Rezept */]();
                console.log('MIKE, REZEPT: ', _this.rezept);
            }
        });
    };
    RezeptErfassenComponent.prototype.addZutat = function () {
        var zutat = new __WEBPACK_IMPORTED_MODULE_2__rezept_dto_zutat__["a" /* Zutat */]();
        this.rezept.zutaten.push(zutat);
    };
    RezeptErfassenComponent.prototype.removeZutat = function (arrayIndex) {
        this.rezept.zutaten.splice(arrayIndex, 1);
        return false;
    };
    RezeptErfassenComponent.prototype.saveRezept = function (rezept) {
        //Speichern...
        this.rezeptService.saveRezept(rezept).subscribe(function (result) {
        });
    };
    /*
    saveImage(path: string): void {
      //Speichern...
      console.log('Speichere Image...');
  
      this.rezeptService.saveImage(path).subscribe(result => {
        console.log('Image erfolgreich gespeichert');
      });
    }
  
  
    loadImage(id: string): void {
      //Speichern...
      console.log('Laden Image...');
  
      this.rezeptService.loadImage(id).subscribe(result => {
        console.log('Image erfolgreich geholt', result);
      });
    }
    */
    RezeptErfassenComponent.prototype.onFileChange = function (fileInput) {
        console.log('FILE SAVEN, fileInput:', fileInput);
        var file = fileInput.target.files[0].name;
        console.log('FILE SAVEN, file :', file);
        this.rezept.imageFilename = file;
        // let fileName = file.name;
    };
    return RezeptErfassenComponent;
}());
RezeptErfassenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rezept-erfassen',
        template: __webpack_require__("./src/app/rezept-erfassen/rezept-erfassen.component.html"),
        styles: [__webpack_require__("./src/app/rezept-erfassen/rezept-erfassen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__rezept_rezept_service__["a" /* RezeptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__rezept_rezept_service__["a" /* RezeptService */]) === "function" && _b || Object])
], RezeptErfassenComponent);

var _a, _b;
//# sourceMappingURL=rezept-erfassen.component.js.map

/***/ }),

/***/ "./src/app/rezept-home/rezept-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-zufaelliges-image {\r\n  height: 30rem;\r\n}\r\n\r\n.h1 {\r\n  color: darkorange;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/rezept-home/rezept-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div (dblclick)=\"openRezept(randomRezept?._id)\">\n  <div>\n    <h1 class=\"h1 text-center m-4\">\n      Zufälliges Rezept\n    </h1>\n  </div>\n  <div class=\"text-center\">\n    <img class=\"app-zufaelliges-image\" src={{randomRezept?.imageFilename}}>\n  </div>\n  <div class=\"text-center mt-4 mb-4\">\n    <h2>\n      {{randomRezept?.titel}}\n    </h2>\n    <h3>\n      {{randomRezept?.beschreibung}}\n    </h3>\n  </div>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary\" data-balloon=\"Holt ein neues zufälliges Rezept\"\n            data-balloon-length=\"medium\"\n            data-balloon-pos=\"down\"\n            label=\"label\" text=\"TEXT\" (click)=\"getRandomRezept()\">\n      Nächstes Rezept\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rezept-home/rezept-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rezept_rezept_service__ = __webpack_require__("./src/app/rezept/rezept.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RezeptHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RezeptHomeComponent = (function () {
    function RezeptHomeComponent(rezeptService, router) {
        this.rezeptService = rezeptService;
        this.router = router;
    }
    RezeptHomeComponent.prototype.ngOnInit = function () {
        this.getRandomRezept();
    };
    RezeptHomeComponent.prototype.getRandomRezept = function () {
        var _this = this;
        console.log("-- RandomRezept aus dem Backend holen --");
        this.rezeptService.loadRandomRezept().subscribe(function (rezept) {
            console.log('RandomRezept erfolgreich geholt');
            console.log("result= ", rezept);
            _this.randomRezept = rezept;
        });
    };
    RezeptHomeComponent.prototype.openRezept = function (id) {
        console.log('Rezpet oeffnen mit id= ', id);
        this.router.navigate(['/rezept/' + id]);
    };
    return RezeptHomeComponent;
}());
RezeptHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rezept-home',
        template: __webpack_require__("./src/app/rezept-home/rezept-home.component.html"),
        styles: [__webpack_require__("./src/app/rezept-home/rezept-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rezept_rezept_service__["a" /* RezeptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rezept_rezept_service__["a" /* RezeptService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RezeptHomeComponent);

var _a, _b;
//# sourceMappingURL=rezept-home.component.js.map

/***/ }),

/***/ "./src/app/rezept-liste/rezept-liste.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-liste-image {\r\n  width: 10rem;\r\n  min-width: 10rem;\r\n}\r\n\r\n.app-liste-item:hover {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/rezept-liste/rezept-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<label> Search: <input ng-model=\"searchTextList\"></label>-->\n<!--<br>-->\n<!--<br>-->\n<!--<input ng-repeat=\"art in art\" type=\"button\" value={{art}} ng-click=\"setSearchText('filter1', art)\">-->\n<!--<input type=\"button\" value=Reset ng-click=\"setSearchText('filter1', '')\">-->\n<!--<br>-->\n<!--<br>-->\n<!--<input ng-repeat=\"grad in schwierigkeitsgrad\" type=\"button\" value={{grad}} ng-click=\"setSearchText('filter2', grad)\">-->\n<!--<input type=\"button\" value=Reset ng-click=\"setSearchText('filter2', '')\">-->\n<!--<br>-->\n\n<div class=\"app-liste-header\">\n  <h2 class=\"h2 text-center m-4\">\n    {{rezeptListe?.length}} Rezepte gefunden\n  </h2>\n  <div class=\"border m-3 border-dark\">\n    <br>\n    <br>\n    <br>\n    FILTER / SUCHEKRITERIEN\n    <br>\n    <br>\n    <br>\n    <br>\n  </div>\n</div>\n\n<ul class=\"list-group no-list-type\">\n  <!--<li class=\"item_list_li\" *ngFor=\"let item of rezeptListe | filter:searchTextList | filter:searchText1 | filter:searchText2\" ng-click=\"openView('/rezept/' +item.id)\">-->\n  <li class=\"m-1 rounded app-liste-item border border-muted\" *ngFor=\"let item of rezeptListe\"\n      (click)=\"selectRezept(item._id)\"\n      (dblclick)=\"openRezept(item._id)\"\n      [ngClass]=\"{'bg-primary border-primary ' : item.selected}\">\n    <img class=\"app-liste-image float-left mr-3 rounded\" src={{item.imageFilename}}>\n    <h5 class=\"\">{{item.titel}}</h5>\n    <div class=\"\">{{item.beschreibung}}</div>\n    <div class=\"row mt-3\">\n      <div class=\"mr-4\">{{item.zeit}} min </div>\n      <div class=\"mr-4\">{{item.kalorien}} kcal </div>\n      <div class=\"\">{{item.art}}</div>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/rezept-liste/rezept-liste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rezept_rezept_service__ = __webpack_require__("./src/app/rezept/rezept.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RezeptListeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RezeptListeComponent = (function () {
    function RezeptListeComponent(router, route, rezeptService) {
        this.router = router;
        this.route = route;
        this.rezeptService = rezeptService;
        this.mylogger('RezeptListe-Component');
    }
    RezeptListeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rezeptService.loadAllRezepte().subscribe(function (result) {
            _this.rezeptListe = result;
        });
    };
    RezeptListeComponent.prototype.openRezept = function (id) {
        console.log('Rezpet oeffnen mit id= ', id);
        this.router.navigate(['/rezept/' + id]);
    };
    RezeptListeComponent.prototype.selectRezept = function (id) {
        console.log('selektieren Id= ', id);
        for (var i = 0; i < this.rezeptListe.length; i++) {
            this.rezeptListe[i].selected = false;
            if (this.rezeptListe[i]._id === id) {
                this.rezeptListe[i].selected = true;
            }
        }
        console.log('Selektiert....');
    };
    /*
      editRezept(id): void {
        console.log('Rezept bearbeiten');
        this.router.navigate(['/rezept/' + id]);
      }
    */
    RezeptListeComponent.prototype.mylogger = function (text) {
        console.log(text);
    };
    return RezeptListeComponent;
}());
RezeptListeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rezept-liste',
        template: __webpack_require__("./src/app/rezept-liste/rezept-liste.component.html"),
        styles: [__webpack_require__("./src/app/rezept-liste/rezept-liste.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__rezept_rezept_service__["a" /* RezeptService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__rezept_rezept_service__["a" /* RezeptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rezept_rezept_service__["a" /* RezeptService */]) === "function" && _c || Object])
], RezeptListeComponent);

var _a, _b, _c;
//# sourceMappingURL=rezept-liste.component.js.map

/***/ }),

/***/ "./src/app/rezept/dto/model-interfaces.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schwierigkeitsgrad", function() { return schwierigkeitsgrad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "art", function() { return art; });
var schwierigkeitsgrad = [
    { name: 'EINFACH', value: 'Einfach' },
    { name: 'MITTEL', value: 'Mittel' },
    { name: 'SCHWIERIG', value: 'Schwierig' }
];
var art = [
    { name: 'VORSPEISE', value: 'Vorspeise' },
    { name: 'HAUPTGANG', value: 'Hauptgang' },
    { name: 'DESSERT', value: 'Dessert' },
    { name: 'GEBAECK', value: 'Gebäck' }
];
//# sourceMappingURL=model-interfaces.js.map

/***/ }),

/***/ "./src/app/rezept/dto/naehrwerte.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Naehrwerte; });
var Naehrwerte = (function () {
    function Naehrwerte() {
        this.kalorien = 0;
        this.fett = 0;
        this.eiweis = 0;
        this.kohlenhydrate = 0;
    }
    return Naehrwerte;
}());

//# sourceMappingURL=naehrwerte.js.map

/***/ }),

/***/ "./src/app/rezept/dto/rezept.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__naehrwerte__ = __webpack_require__("./src/app/rezept/dto/naehrwerte.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rezept; });

var Rezept = (function () {
    function Rezept() {
        this.beschreibung = "";
        this.titel = "";
        this.zutatenAnzahl = 0;
        this.zutaten = new Array();
        this.schwierigkeitsgrad = "";
        this.zeit = 0;
        this.zubereitung = "";
        this.art = "";
        this.selected = false;
        this.imageFilename = "";
        this.naehrwerte = new __WEBPACK_IMPORTED_MODULE_0__naehrwerte__["a" /* Naehrwerte */]();
    }
    return Rezept;
}());

//# sourceMappingURL=rezept.js.map

/***/ }),

/***/ "./src/app/rezept/dto/zutat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Zutat; });
var Zutat = (function () {
    function Zutat() {
        this.menge = 0;
        this.einheit = "";
        this.zutat = "";
    }
    return Zutat;
}());

//# sourceMappingURL=zutat.js.map

/***/ }),

/***/ "./src/app/rezept/rezept.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RezeptService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RezeptService = (function () {
    function RezeptService(http) {
        this.http = http;
        this.rezeptUrl = '/api/rezept';
        this.dirImages = '../../assets/images/';
    }
    //http anschauen, wie ich options mitgeben kann ;-)
    RezeptService.prototype.loadAllRezepte = function () {
        var _this = this;
        console.log("--Alle Rezepte vom Backend holen--");
        var url = this.rezeptUrl + '/list';
        return this.http.get(url)
            .map(function (rezepteliste) {
            var rezeptelisteJSON = rezepteliste.json();
            for (var _i = 0, rezeptelisteJSON_1 = rezeptelisteJSON; _i < rezeptelisteJSON_1.length; _i++) {
                var rezept = rezeptelisteJSON_1[_i];
                rezept.imageFilename = _this.dirImages + rezept.imageFilename;
            }
            return rezeptelisteJSON;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(_this.handleError(error) || 'Server error'); });
    };
    RezeptService.prototype.loadRezept = function (id) {
        var _this = this;
        console.log('--Rezept mit id: ' + id + ' vom Backend holen--');
        var url = this.rezeptUrl + '/' + id;
        return this.http.get(url)
            .map(function (rezept) {
            var rezeptJSON = rezept.json();
            rezeptJSON.imageFilename = _this.dirImages + rezeptJSON.imageFilename;
            return rezeptJSON;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(_this.handleError(error) || 'Server error'); });
    };
    RezeptService.prototype.loadRandomRezept = function () {
        var _this = this;
        console.log('--RandomRezept vom Backend holen--');
        var url = this.rezeptUrl + '/random';
        return this.http.get(url)
            .map(function (rezept) {
            var rezeptJSON = rezept.json();
            rezeptJSON.imageFilename = _this.dirImages + rezeptJSON.imageFilename;
            return rezeptJSON;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(_this.handleError(error) || 'Server error'); });
    };
    RezeptService.prototype.saveRezept = function (rezept) {
        var _this = this;
        console.log('--Neues Rezept im Backend speichern--');
        console.log('--Neues Rezept im Backend speichern-- REZEPT: ', rezept);
        var url = this.rezeptUrl + '/save';
        return this.http.post(url, rezept)
            .map(function (res) { return res; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(_this.handleError(error) || 'Server error'); });
    };
    RezeptService.prototype.deleteRezept = function (id) {
        var _this = this;
        console.log('--Rezept mit id: ' + id + ' im Backend loeschen--');
        var url = this.rezeptUrl + '/delete/' + id;
        return this.http.delete(url)
            .map(function (res) { return res; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(_this.handleError(error) || 'Server error'); });
    };
    RezeptService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    return RezeptService;
}());
RezeptService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RezeptService);

var _a;
//# sourceMappingURL=rezept.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map