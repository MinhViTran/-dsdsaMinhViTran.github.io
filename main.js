(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n\n<head>\n\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\"\n    integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n  <!-- Icon NavBar-->\n  <ul class=\"nav justify-content-center\">\n    <li class=\"nav-item logo-image\">\n\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Chưa biết làm sao</a>\n    </li>\n\n  </ul>\n  <!-- NavBar-->\n<app-nav-bar></app-nav-bar>\n  \n  <br>\n  <!-- Example single danger button -->\n  <div class=\"justify-content-center container\">\n    <!--Choose-->\n    <div class=\"row \">\n      <div class=\"col\">\n        <!--<app-choose-date></app-choose-date>-->\n      </div>\n      <div class=\"col\">\n        <!--<app-choose-team></app-choose-team>-->\n      </div>\n      <div class=\"col\">\n        <!--<app-choose-round></app-choose-round>-->\n      </div>\n    </div>\n    <br>\n    <!-- Table result-->\n    <app-table></app-table>\n\n\n  </div>\n\n\n\n\n\n  <!-- Optional JavaScript -->\n  <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n    integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\n    integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\n    integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\n    crossorigin=\"anonymous\"></script>\n    \n\n</body>\n\n</html>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'result';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _choose_date_choose_date_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./choose-date/choose-date.component */ "./src/app/choose-date/choose-date.component.ts");
/* harmony import */ var _choose_team_choose_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choose-team/choose-team.component */ "./src/app/choose-team/choose-team.component.ts");
/* harmony import */ var _choose_round_choose_round_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./choose-round/choose-round.component */ "./src/app/choose-round/choose-round.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _choose_date_choose_date_component__WEBPACK_IMPORTED_MODULE_8__["ChooseDateComponent"],
                _choose_team_choose_team_component__WEBPACK_IMPORTED_MODULE_9__["ChooseTeamComponent"],
                _choose_round_choose_round_component__WEBPACK_IMPORTED_MODULE_10__["ChooseRoundComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/choose-date/choose-date.component.css":
/*!*******************************************************!*\
  !*** ./src/app/choose-date/choose-date.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS1kYXRlL2Nob29zZS1kYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/choose-date/choose-date.component.html":
/*!********************************************************!*\
  !*** ./src/app/choose-date/choose-date.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ngbDropdown class=\"d-inline-block\">\n  <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle\n    style=\"background-color: black; color:white\">Choose Date</button>\n  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n    <button ngbDropdownItem *ngFor= \"let game of games\">{{game.date}}</button>\n\n  </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/choose-date/choose-date.component.ts":
/*!******************************************************!*\
  !*** ./src/app/choose-date/choose-date.component.ts ***!
  \******************************************************/
/*! exports provided: ChooseDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDateComponent", function() { return ChooseDateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");



var ChooseDateComponent = /** @class */ (function () {
    function ChooseDateComponent(dataService) {
        this.dataService = dataService;
    }
    ChooseDateComponent.prototype.ngOnInit = function () {
        this.getAFLTeams();
    };
    ChooseDateComponent.prototype.getAFLTeams = function () {
        var _this = this;
        this.dataService.getTeams().subscribe(function (temp) { _this.teams = temp; });
    };
    ChooseDateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-date',
            template: __webpack_require__(/*! ./choose-date.component.html */ "./src/app/choose-date/choose-date.component.html"),
            styles: [__webpack_require__(/*! ./choose-date.component.css */ "./src/app/choose-date/choose-date.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], ChooseDateComponent);
    return ChooseDateComponent;
}());



/***/ }),

/***/ "./src/app/choose-round/choose-round.component.css":
/*!*********************************************************!*\
  !*** ./src/app/choose-round/choose-round.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS1yb3VuZC9jaG9vc2Utcm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/choose-round/choose-round.component.html":
/*!**********************************************************!*\
  !*** ./src/app/choose-round/choose-round.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ngbDropdown class=\"d-inline-block\">\n  <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle\n    style=\"background-color: black; color:white\">Choose Round</button>\n  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n    <button ngbDropdownItem>3</button>\n    <button ngbDropdownItem>2</button>\n    <button ngbDropdownItem>1 </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/choose-round/choose-round.component.ts":
/*!********************************************************!*\
  !*** ./src/app/choose-round/choose-round.component.ts ***!
  \********************************************************/
/*! exports provided: ChooseRoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRoundComponent", function() { return ChooseRoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChooseRoundComponent = /** @class */ (function () {
    function ChooseRoundComponent() {
    }
    ChooseRoundComponent.prototype.ngOnInit = function () {
    };
    ChooseRoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-round',
            template: __webpack_require__(/*! ./choose-round.component.html */ "./src/app/choose-round/choose-round.component.html"),
            styles: [__webpack_require__(/*! ./choose-round.component.css */ "./src/app/choose-round/choose-round.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChooseRoundComponent);
    return ChooseRoundComponent;
}());



/***/ }),

/***/ "./src/app/choose-team/choose-team.component.css":
/*!*******************************************************!*\
  !*** ./src/app/choose-team/choose-team.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS10ZWFtL2Nob29zZS10ZWFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/choose-team/choose-team.component.html":
/*!********************************************************!*\
  !*** ./src/app/choose-team/choose-team.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ngbDropdown class=\"d-inline-block\">\n  <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle\n    style=\"background-color: black; color:white\">Choose Team</button>\n  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n    <button ngbDropdownItem>Hawthorn</button>\n    <button ngbDropdownItem>Hawthorn</button>\n    <button ngbDropdownItem>Hawthorn</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/choose-team/choose-team.component.ts":
/*!******************************************************!*\
  !*** ./src/app/choose-team/choose-team.component.ts ***!
  \******************************************************/
/*! exports provided: ChooseTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseTeamComponent", function() { return ChooseTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChooseTeamComponent = /** @class */ (function () {
    function ChooseTeamComponent() {
    }
    ChooseTeamComponent.prototype.ngOnInit = function () {
    };
    ChooseTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-team',
            template: __webpack_require__(/*! ./choose-team.component.html */ "./src/app/choose-team/choose-team.component.html"),
            styles: [__webpack_require__(/*! ./choose-team.component.css */ "./src/app/choose-team/choose-team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChooseTeamComponent);
    return ChooseTeamComponent;
}());



/***/ }),

/***/ "./src/app/data-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team */ "./src/app/team.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ "./src/app/game.ts");






var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
    }
    DataServiceService.prototype.getTeams = function () {
        return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.teams.map(function (item) { return new _team__WEBPACK_IMPORTED_MODULE_4__["Team"](item.logo, item.id, item.name, item.abbrev); }); }));
    };
    DataServiceService.prototype.getGames2 = function () {
        return this.http.get('https://api.squiggle.com.au/?q=games;round=2;year=2019').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.games.map(function (item) { return new _game__WEBPACK_IMPORTED_MODULE_5__["Game"](item.complete, item.is_grand_final, item.tz, item.hbehinds, item.ateam, item.winnerteamid, item.hgoals, item.updated, item.round, item.is_final, item.hscore, item.abehinds, item.winner, item.ascore, item.hteam, item.ateamid, item.venue, item.hteamid, item.agoals, item.year, item.date, item.id); }); }));
    };
    DataServiceService.prototype.getGames1 = function () {
        return this.http.get('https://api.squiggle.com.au/?q=games;round=1;year=2019').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.games.map(function (item) { return new _game__WEBPACK_IMPORTED_MODULE_5__["Game"](item.complete, item.is_grand_final, item.tz, item.hbehinds, item.ateam, item.winnerteamid, item.hgoals, item.updated, item.round, item.is_final, item.hscore, item.abehinds, item.winner, item.ascore, item.hteam, item.ateamid, item.venue, item.hteamid, item.agoals, item.year, item.date, item.id); }); }));
    };
    DataServiceService.prototype.getGames3 = function () {
        return this.http.get('https://api.squiggle.com.au/?q=games;round=3;year=2019').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.games.map(function (item) { return new _game__WEBPACK_IMPORTED_MODULE_5__["Game"](item.complete, item.is_grand_final, item.tz, item.hbehinds, item.ateam, item.winnerteamid, item.hgoals, item.updated, item.round, item.is_final, item.hscore, item.abehinds, item.winner, item.ascore, item.hteam, item.ateamid, item.venue, item.hteamid, item.agoals, item.year, item.date, item.id); }); }));
    };
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/game.ts":
/*!*************************!*\
  !*** ./src/app/game.ts ***!
  \*************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(complete, is_grand_final, tz, hbehinds, ateam, winnerteamid, hgoals, updated, round, is_final, hscore, abehinds, winner, ascore, hteam, ateamid, venue, hteamid, agoals, year, date, id) {
        this.complete = complete;
        this.is_grand_final = is_grand_final;
        this.tz = tz;
        this.hbehinds = hbehinds;
        this.ateam = ateam;
        this.winnerteamid = winnerteamid;
        this.hgoals = hgoals;
        this.updated = updated;
        this.round = round;
        this.is_final = is_final;
        this.hscore = hscore;
        this.abehinds = abehinds;
        this.winner = winner;
        this.ascore = ascore;
        this.hteam = hteam;
        this.ateamid = ateamid;
        this.venue = venue;
        this.hteamid = hteamid;
        this.agoals = agoals;
        this.year = year;
        this.date = date;
        this.id = id;
    }
    return Game;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark\" style=\"background-color: #33B8FF;\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: red\"><i class=\"fas fa-football-ball\"></i> HOME</a>\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\"\n    aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"></button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Result</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Prediction</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Schedule</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Rank</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Page navigation example\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\"><a class=\"page-link\">Round</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\"(click)=\"show1 = show1 \">1</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\"(click)=\"show2 = !show2 && show1 = show1\" >2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\"(click)=\" show3 = show3\">3</a></li>    \n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">6</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">7</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">8</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">9</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">10</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">11</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">13</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">14</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">15</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">16</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">17</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">18</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">19</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">20</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">21</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">22</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">23</a></li>\n\n\n\n  </ul>\n</nav>\n<br>\n<br>\n<table class=\"table table-bordered table-dark container\" *ngIf=\"show1\">\n\n  <tr>\n    <th>Home Team</th>\n    <th>Away Team</th>\n    <th>Score</th>\n    <th>Time</th>\n  </tr>\n  <tr *ngFor=\"let game of games1\">\n    <td>{{game.hteam}}</td>\n    <td>{{game.ateam}}</td>\n    <td>{{game.hscore}}-{{game.ascore}}</td>\n    <td>{{game.date}}</td>\n  </tr>\n</table>\n\n<table class=\"table table-bordered table-dark container\" *ngIf = \"!show2 || !show1\">\n\n  <tr>\n    <th>Home Team</th>\n    <th>Away Team</th>\n    <th>Score</th>\n    <th>Time</th>\n  </tr>\n\n  <tr *ngFor=\"let game of games2\">\n\n    <td>{{game.hteam}}</td>\n    <td>{{game.ateam}}</td>\n    <td>{{game.hscore}}-{{game.ascore}}</td>\n    <td>{{game.date}}</td>\n\n  </tr>\n</table>\n\n<table class=\"table table-bordered table-dark container\" *ngIf = \"!show3 \">\n\n  <tr>\n    <th>Home Team</th>\n    <th>Away Team</th>\n    <th>Score</th>\n    <th>Time</th>\n  </tr>\n\n  <tr *ngFor=\"let game of games3\">\n\n    <td>{{game.hteam}}</td>\n    <td>{{game.ateam}}</td>\n    <td>{{game.hscore}}-{{game.ascore}}</td>\n    <td>{{game.date}}</td>\n\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");



var TableComponent = /** @class */ (function () {
    function TableComponent(dataService) {
        this.dataService = dataService;
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.getAFLTeams();
        this.getGames2();
        this.getGames1();
        this.getGames3();
    };
    TableComponent.prototype.getAFLTeams = function () {
        var _this = this;
        this.dataService.getTeams().subscribe(function (temp) { _this.teams = temp; });
    };
    TableComponent.prototype.getGames2 = function () {
        var _this = this;
        this.dataService.getGames2().subscribe(function (temp) { _this.games2 = temp; });
    };
    TableComponent.prototype.getGames1 = function () {
        var _this = this;
        this.dataService.getGames1().subscribe(function (temp) { _this.games1 = temp; });
    };
    TableComponent.prototype.getGames3 = function () {
        var _this = this;
        this.dataService.getGames3().subscribe(function (temp) { _this.games3 = temp; });
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/team.ts":
/*!*************************!*\
  !*** ./src/app/team.ts ***!
  \*************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(logo, id, name, abbrev) {
        this.logo = logo;
        this.id = id;
        this.name = name;
        this.abbrev = abbrev;
    }
    return Team;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web developer\Angular4\Assingmnet\result\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map