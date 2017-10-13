webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_song_modals_song__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(modalCtrl, statusBar, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar.styleLightContent();
    }
    HomePage.prototype.modalsTapped = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_song_modals_song__["a" /* ModalsSongPage */]);
        modal.present();
    };
    HomePage.prototype.changeButton = function () {
        this.status = !this.status;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar class="nav" color="dark">\n\n    <ion-title class="title">\n\n      <p class="ptitle">Home</p>\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen>\n\n  <br>\n\n  <div class="topic"><b>Concerts Near You</b></div>\n\n  <div class="desc">Upcoming Concerts by Artists You Love</div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="adele_-_21.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Artists\n\n          <p class="desc2">location</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-scroll>\n\n\n\n  <br>\n\n\n\n  <div class="topic"><b>Recently</b></div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="insurgency.jpg"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Song\n\n          <p class="desc2">Album by artist</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="insurgency.jpg"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Song\n\n          <p class="desc2">Album by artist</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="insurgency.jpg"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Song\n\n          <p class="desc2">Album by artist</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="insurgency.jpg"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Song\n\n          <p class="desc2">Album by artist</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-scroll>\n\n  <br>\n\n  <div class="topic"><b>Popular</b></div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="insurgency.jpg"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Song\n\n          <p class="desc2">1,000 follower</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-scroll>\n\n  <br>\n\n  <div class="topic"><b>Charts</b></div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="insurgency.jpg"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Type\n\n          <p class="desc2">1,000 follower</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-scroll>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer">\n\n    <ion-buttons class="button" (click)="modalsTapped()">\n\n      <button ion-button icon-right>\n\n        <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title class="position" (click)="modalsTapped()">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs -\n\n            <p class="artist">Artists</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs2 -\n\n            <p class="artist">Artists2</p>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button ion-left (click)="changeButton()">\n\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n        </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifydataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SpotifydataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SpotifydataProvider = (function () {
    function SpotifydataProvider(http) {
        this.http = http;
        console.log('Hello SpotifydataProvider Provider');
    }
    SpotifydataProvider.prototype.getImage = function () {
        return 'user.png';
    };
    return SpotifydataProvider;
}());
SpotifydataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SpotifydataProvider);

//# sourceMappingURL=spotifydata.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_select__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collection_collection__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__select_select__["a" /* SelectPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__collection_collection__["a" /* CollectionPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Select" tabIcon="musical-notes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Collection" tabIcon="albums"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.modalsTapped = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__["a" /* ModalsSongPage */]);
        modal.present();
    };
    SearchPage.prototype.changeButton = function () {
        this.status = !this.status;
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n      <ion-navbar color="dark" class="opacity">\n\n          <ion-searchbar placeholder="Search" showCancelButton ></ion-searchbar>\n\n          <ion-buttons end>\n\n              <button ion-button icon-only (click)="openModel()">\n\n                <ion-icon name="camera"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n      </ion-navbar>\n\n        \n\n        \n\n\n\n  \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" fullscreen> \n\n    \n\n  <img class="picture" src="search2.png">\n\n    \n\n  <div class="text">\n\n    Search Spotify\n\n  </div>\n\n  <div class="text2">\n\n    ค้นหาเพลงโปรด ศิลปิน อัลบั้ม พอดแคสต์ เพลย์ลิสต์ และเพื่อนของคุณ\n\n  </div>\n\n  \n\n    \n\n\n\n      \n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar color="dark" class="footer">\n\n      <ion-buttons class="button">\n\n        <button ion-button icon-right  (click)="modalsTapped()">\n\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  \n\n      <ion-title class="position"  (click)="modalsTapped()">\n\n          <ion-slides>\n\n            <ion-slide>\n\n              <div class="song">\n\n                Songs -\n\n                <p class="artist">Artists</p>\n\n              </div>\n\n            </ion-slide>\n\n            <ion-slide>\n\n              <div class="song">\n\n                Songs2 -\n\n                <p class="artist">Artists2</p>\n\n              </div>\n\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-title>\n\n    \n\n        <ion-buttons end>\n\n          <button ion-button ion-left (click)="changeButton()">\n\n                <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n          </button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n    </ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectPage = (function () {
    function SelectPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelectPage.prototype.modalsTapped = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__["a" /* ModalsSongPage */]);
        modal.present();
    };
    SelectPage.prototype.changeButton = function () {
        this.status = !this.status;
        console.log(this.status);
    };
    SelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectPage');
    };
    return SelectPage;
}());
SelectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-select',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\select\select.html"*/'<!--\n  Generated template for the SelectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar class="nav" color="dark">\n    <ion-title class="title">\n      <p class="ptitle">Select</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <br>\n  <div class="topic"><b>Relax with song</b></div>\n  <ion-scroll scrollX="true" direction="x">\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="adele_-_21.png"></ion-img>\n        <ion-card-header class="artist">\n          Artists\n          <p class="desc2">location</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="adele_-_21.png"></ion-img>\n        <ion-card-header class="artist">\n          Artists\n          <p class="desc2">location</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="adele_-_21.png"></ion-img>\n        <ion-card-header class="artist">\n          Artists\n          <p class="desc2">location</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="adele_-_21.png"></ion-img>\n        <ion-card-header class="artist">\n          Artists\n          <p class="desc2">location</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="adele_-_21.png"></ion-img>\n        <ion-card-header class="artist">\n          Artists\n          <p class="desc2">location</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="adele_-_21.png"></ion-img>\n        <ion-card-header class="artist">\n          Artists\n          <p class="desc2">location</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n  </ion-scroll>\n\n  <ion-list no-lines class="ion-content">\n    <button ion-item full outline class="ion-content">\n        <ion-icon name="trending-up" item-start></ion-icon>\n        Charts\n      </button>\n    <button ion-item full outline class="ion-content">\n          <ion-icon name="calendar" item-start></ion-icon>\n          New Releases\n      </button>\n    <button ion-item full outline class="ion-content">\n            <ion-icon c name="radio" item-start></ion-icon>\n            Podcast\n      </button>\n    <button ion-item full outline class="ion-content">\n              <ion-icon name="ionic" item-start></ion-icon>\n              Discover\n      </button>\n    <button ion-item full outline class="ion-content">\n                <ion-icon name="videocam" item-start></ion-icon>\n                Concert\n      </button>\n  </ion-list>\n\n  <div class="topic"><b>Type &amp; Emotion </b></div>\n  <button ion-button class="type">\n      <img class="img" src="adele_-_21.png" />\n      <img class="card-title" src="xylophone.png"/>\n      <div class="card-subtitle">41 Listings</div>\n    </button>\n\n  <button ion-button class="type">\n        <img class="img" src="adele_-_21.png" />\n        <img class="card-title" src="xylophone.png"/>\n        <div class="card-subtitle">41 Listings</div>\n    </button>\n\n  <button ion-button class="type">\n        <img class="img" src="adele_-_21.png" />\n        <img class="card-title" src="xylophone.png"/>\n        <div class="card-subtitle">41 Listings</div>\n    </button>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="dark" class="footer">\n    <ion-buttons class="button" (click)="modalsTapped()">\n      <button ion-button icon-right>\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title class="position" (click)="modalsTapped()">\n      <ion-slides>\n        <ion-slide>\n          <div class="song">\n            Songs -\n            <p class="artist">Artists</p>\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div class="song">\n            Songs2 -\n            <p class="artist">Artists2</p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button ion-left (click)="changeButton()">\n            <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\select\select.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SelectPage);

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_setting_setting__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spotifydata_spotifydata__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_song_modals_song__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CollectionPage = (function () {
    function CollectionPage(modalCtrl, spotify, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ImageUrl = '';
        this.ImageUrl = spotify.getImage();
    }
    CollectionPage.prototype.modalsTapped = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modals_song_modals_song__["a" /* ModalsSongPage */]);
        modal.present();
    };
    CollectionPage.prototype.changeButton = function () {
        this.status = !this.status;
    };
    CollectionPage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_setting_setting__["a" /* SettingPage */]);
    };
    CollectionPage.prototype.profile = function (profile) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */], profile);
    };
    CollectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CollectionPage');
    };
    return CollectionPage;
}());
CollectionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-collection',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\collection\collection.html"*/'<!--\n\n  Generated template for the CollectionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark" class="opacity"> \n\n        \n\n            <!-- <ion-buttons start>\n\n              <button ion-button round (click)="openModel()">\n\n                <img src="user.png">\n\n                <ion-icon name="contact"></ion-icon>\n\n              </button>\n\n            </ion-buttons> -->\n\n        \n\n            <ion-avatar style="padding-left:10px;" (click)="profile(profile)">\n\n                <img style="width: 30px; height: 30px;" src={{ImageUrl}}>\n\n              </ion-avatar>\n\n        \n\n            <ion-title>My Collections</ion-title>\n\n\n\n            <ion-buttons end>\n\n              <button ion-button icon-only (click)="setting()">\n\n                <ion-icon name="settings"></ion-icon>\n\n              </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" fullscreen >\n\n  <ion-list no-lines>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n      <ion-icon name="musical-notes" item-start></ion-icon>\n\n      Playlists\n\n    </button>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n        <ion-icon name="musical-note" item-start></ion-icon>\n\n        Musics\n\n      </button>\n\n\n\n      <button ion-item full outline class="ion-content">\n\n          <ion-icon name="disc" item-start></ion-icon>\n\n          Albums\n\n        </button>\n\n\n\n        <button ion-item full outline class="ion-content">\n\n            <ion-icon name="headset" item-start></ion-icon>\n\n            Artists\n\n          </button>\n\n          \n\n          <button ion-item full outline class="ion-content">\n\n              <ion-icon name="radio" item-start></ion-icon>\n\n              Podcasts\n\n    </button>\n\n    <ion-item class="ion-content">\n\n      <ion-label start>Recents</ion-label>\n\n      <button ion-button clear item-end class="ion-content" (click)="openModel()">Edit</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer" >\n\n    <ion-buttons class="button" (click)="modalsTapped()">\n\n      <button ion-button icon-right>\n\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n    \n\n    <ion-title class="position" (click)="modalsTapped()">\n\n        <ion-slides>\n\n          <ion-slide>\n\n            <div class="song">\n\n              Songs -\n\n              <p class="artist">Artists</p>\n\n            </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <div class="song">\n\n              Songs2 -\n\n              <p class="artist">Artists2</p>\n\n            </div>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button ion-left (click)="changeButton()">\n\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\collection\collection.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CollectionPage);

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(alertCtrl, viewCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
        this.viewCtrl.setBackButtonText('');
    };
    SettingPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the CollectionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark" class="opacity"> \n\n          <ion-title>Settings</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" fullscreen text-center >\n\n<ion-list no-lines>\n\n    \n\n    <button ion-item full outline class="ion-content">\n\n      Account\n\n    </button>\n\n<p></p>\n\n    <button ion-item full outline class="ion-content">\n\n      Playing\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n      Device\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n       Social\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n      Sound\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n        Notifications\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n        About\n\n      </button>\n\n      <p></p>\n\n      <button ion-button color="light" round (click)="presentConfirm()">\n\n        Logout\n\n      </button>\n\n\n\n</ion-list>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spotifydata_spotifydata__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(spotify, navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ImageUrl = '';
        this.ImageUrl = spotify.getImage();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="ion-content">\n\n  <img src ={{ImageUrl}} class="picture">\n\n  <div class="text">\n\n    Mr.Spotify the Jook Slayer\n\n  </div>\n\n  <button ion-button color="light" round small class="button">\n\n      Find friends\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modals_song_modals_song__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_select_select__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_collection_collection__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_spotifydata_spotifydata__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_select_select__["a" /* SelectPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_collection_collection__["a" /* CollectionPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_modals_song_modals_song__["a" /* ModalsSongPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_select_select__["a" /* SelectPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_collection_collection__["a" /* CollectionPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_modals_song_modals_song__["a" /* ModalsSongPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.statusBar = statusBar;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsSongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalsSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalsSongPage = (function () {
    function ModalsSongPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalsSongPage.prototype.closeTapped = function () {
        this.navCtrl.pop();
    };
    ModalsSongPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalsSongPage');
    };
    return ModalsSongPage;
}());
ModalsSongPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modals-song',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\modals-song\modals-song.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons class="button" (click)="closeTapped()">\n      <button ion-button icon-right>\n          <ion-icon  name="arrow-down" class="buttonColor"></ion-icon>\n        </button>\n    </ion-buttons>\n    <div class="artist">Playing music from\n      <p class="artist">Adele</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\modals-song\modals-song.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ModalsSongPage);

//# sourceMappingURL=modals-song.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map