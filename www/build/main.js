webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_setting_setting__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spotifydata_spotifydata__ = __webpack_require__(103);
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
        selector: 'page-collection',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\collection\collection.html"*/'<!--\n\n  Generated template for the CollectionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark" class="opacity" hideBackButton> \n\n        \n\n            <!-- <ion-buttons start>\n\n              <button ion-button round (click)="openModel()">\n\n                <img src="user.png">\n\n                <ion-icon name="contact"></ion-icon>\n\n              </button>\n\n            </ion-buttons> -->\n\n        \n\n            <ion-avatar style="padding-left:10px;" (click)="profile(profile)">\n\n                <img style="width: 30px; height: 30px;" src={{ImageUrl}}>\n\n              </ion-avatar>\n\n        \n\n            <ion-title>My Collections</ion-title>\n\n\n\n            <ion-buttons end>\n\n              <button ion-button icon-only (click)="setting()">\n\n                <ion-icon name="settings"></ion-icon>\n\n              </button>\n\n              \n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" fullscreen >\n\n  <ion-list no-lines>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n      <ion-icon name="musical-notes" item-start></ion-icon>\n\n      Playlists\n\n    </button>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n        <ion-icon name="musical-note" item-start></ion-icon>\n\n        Songs\n\n      </button>\n\n\n\n      <button ion-item full outline class="ion-content">\n\n          <ion-icon name="disc" item-start></ion-icon>\n\n          Albums\n\n        </button>\n\n\n\n        <button ion-item full outline class="ion-content">\n\n            <ion-icon name="headset" item-start></ion-icon>\n\n            Artists\n\n          </button>\n\n          \n\n          <button ion-item full outline class="ion-content">\n\n              <ion-icon name="radio" item-start></ion-icon>\n\n              Podcasts\n\n          </button>\n\n\n\n    <ion-item class="ion-content">\n\n      <ion-label start>Recently Played</ion-label>\n\n      <!-- <button ion-button clear item-end class="ion-content" (click)="openModel()">Edit</button> -->\n\n    </ion-item>\n\n    <div class="text2">\n\n        Get quick access to all your recently played<br>\n\n         content here.\n\n      </div>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer" >\n\n    <ion-buttons class="button" (click)="modalsTapped()">\n\n      <button ion-button icon-right>\n\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n    \n\n    <ion-title class="position" (click)="modalsTapped()">\n\n        <ion-slides>\n\n          <ion-slide>\n\n            <div class="song">\n\n              Songs -\n\n              <p class="artist">Artists</p>\n\n            </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <div class="song">\n\n              Songs2 -\n\n              <p class="artist">Artists2</p>\n\n            </div>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button ion-left (click)="changeButton()">\n\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\collection\collection.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CollectionPage);

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifydataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(202);
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

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_select__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collection_collection__ = __webpack_require__(102);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Browse" tabIcon="musical-notes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Your libraries" tabIcon="albums"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function SearchPage(alertCtrl, modalCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
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
    SearchPage.prototype.camera = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '"Spotify" would like to access your camera. You need to enable this in Settings.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Settings',
                    handler: function () {
                        var alert = _this.alertCtrl.create({
                            title: 'Couldn' + '&apos;' + 't Open Link',
                            subTitle: 'The link you tried to open appeared to be a Spotify link, but Spotify was unable to open it.',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                }
            ]
        });
        alert.present();
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar color="dark" class="opacity">\n\n\n\n    <ion-searchbar placeholder="Search" showCancelButton></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="camera()">\n\n        <ion-icon name="camera"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" fullscreen>\n\n\n\n  <img class="picture" src="search2.png">\n\n\n\n  <div class="divtext">\n\n    <p class="text">\n\n    Search Spotify\n\n  </p>\n\n\n\n  <p class="text2">\n\n    Find your favorite songs, artists,\n\n    <br> albums, podcasts, playlists and friends.\n\n    </p>\n\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer">\n\n    <ion-buttons class="button">\n\n      <button ion-button icon-right (click)="modalsTapped()">\n\n        <ion-icon name="arrow-up" class="buttonColor"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title class="position" (click)="modalsTapped()">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs -\n\n            <p class="artist">Artists</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs2 -\n\n            <p class="artist">Artists2</p>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button ion-left (click)="changeButton()">\n\n        <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'">\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_playback_playback__ = __webpack_require__(201);
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
            title: 'Log Out',
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
                    text: 'Log out',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SettingPage.prototype.playback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_playback_playback__["a" /* PlaybackPage */]);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the CollectionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark" class="opacity"> \n\n          <ion-title>Settings</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" fullscreen text-center >\n\n<ion-list no-lines>\n\n    \n\n    <button ion-item full outline class="ion-content">\n\n      Account\n\n    </button>\n\n<p></p>\n\n    <button ion-item full outline class="ion-content" (click)="playback()">\n\n      Playback\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n      Devices\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n       Social\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n      Music Quality\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n        Notifications\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n        About\n\n      </button>\n\n      <p></p>\n\n      <button ion-button class ="buttonLogout"round (click)="presentConfirm()">\n\n        LOG OUT\n\n      </button>\n\n\n\n</ion-list>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaybackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the PlaybackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlaybackPage = (function () {
    function PlaybackPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {
            gap: true,
            hide: true,
            enable: true,
            play: true
        };
    }
    PlaybackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaybackPage');
        this.viewCtrl.setBackButtonText('');
    };
    return PlaybackPage;
}());
PlaybackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-playback',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\playback\playback.html"*/'<!--\n\n  Generated template for the PlaybackPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark" class="opacity">\n\n    <ion-title>Playback</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" fullscreen>\n\n \n\n    <ion-list no-lines>\n\n    \n\n\n\n    <button ion-item full outline class="listtext">\n\n        Equaliser\n\n    </button>\n\n\n\n      <ion-item class="listtext">\n\n          <ion-label>Offline</ion-label>\n\n          <ion-toggle color="secondary"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <div class="text">\n\n            When you go offline, you\'ll only be able to play the music\n\n            and podcasts you\'ve downloaded.\n\n      </div>\n\n      <br><br>\n\n\n\n      <div text-center class="text2">\n\n        Crossfade\n\n      </div>   \n\n\n\n       <ion-item class="ion-content">\n\n          <ion-range min="0" max="12" pin="true"color="secondary">\n\n            <label range-left small>0s</label>\n\n            <label range-right small>12s</label>\n\n          </ion-range>\n\n       </ion-item>\n\n\n\n          \n\n       <ion-item class="ion-content">\n\n          <ion-label>Gapless Playback</ion-label>\n\n          <ion-toggle [(ngModel)]="data.gap" color="secondary"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <ion-item class="listtext">\n\n          <ion-label>Hide Unplayable Songs</ion-label>\n\n          <ion-toggle [(ngModel)]="data.hide" color="secondary"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <ion-item class="listtext">\n\n          <ion-label>Enable Audio Normalisation</ion-label>\n\n          <ion-toggle [(ngModel)]="data.enable" color="secondary"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <ion-item class="listtext">\n\n          <ion-label>Play Feedback Sounds</ion-label>\n\n          <ion-toggle [(ngModel)]="data.play" color="secondary"></ion-toggle>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\playback\playback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PlaybackPage);

//# sourceMappingURL=playback.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spotifydata_spotifydata__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_collection_collection__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_findfriends_findfriends__ = __webpack_require__(205);
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
    function ProfilePage(viewCtrl, spotify, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ImageUrl = '';
        this.tap1 = 0;
        this.tap2 = 0;
        this.tap3 = 0;
        this.ImageUrl = spotify.getImage();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        // this.viewCtrl.setBackButtonText('');
    };
    ProfilePage.prototype.findfriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_findfriends_findfriends__["a" /* FindfriendsPage */]);
    };
    ProfilePage.prototype.tapEvent1 = function (e) {
        this.tap1++;
    };
    ProfilePage.prototype.tapEvent2 = function (e) {
        this.tap2++;
    };
    ProfilePage.prototype.tapEvent3 = function (e) {
        this.tap3++;
    };
    ProfilePage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_collection_collection__["a" /* CollectionPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n      \n\n     <ion-toolbar hideBackButton text-center>\n\n       \n\n      <ion-icon name="arrow-back" class ="backIcon" color ="light" (click)="back()"></ion-icon>\n\n    \n\n        <ion-avatar class="image">\n\n            <img src={{ImageUrl}}>\n\n          </ion-avatar>\n\n\n\n         <div class="textName">\n\n          Guy\'Sanook Assawaraksakul\n\n        </div>\n\n\n\n        <button class=" buttonFriend" ion-button round small (click)="findfriends()"> \n\n            <div class="textFriend">\n\n               FIND FRIENDS \n\n              </div>\n\n        </button>\n\n      </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="ion-content" fullscreen>\n\n  <!-- <img src ={{ImageUrl}} class="picture">\n\n  <div class="text">\n\n    Mr.Spotify the Jook Slayer\n\n  </div>\n\n  <button ion-button color="light" round small class="button">\n\n      Find friends\n\n  </button> -->\n\n  \n\n  \n\n      <div class="playList1" (tap)="tapEvent1($event)">\n\n          {{tap1}}\n\n      </div>\n\n      <div class="follower1" (tap)="tapEvent2($event)">\n\n          {{tap2}}\n\n      </div>\n\n      <div class="following1" (tap)="tapEvent3($event)">\n\n          {{tap3}}\n\n      </div>\n\n   \n\n  \n\n        <div class="playList2">\n\n          PLAYLISTS\n\n        </div>\n\n\n\n        <div class="follower2">\n\n          FOLLOWERS\n\n        </div>\n\n\n\n        <div class="following2">\n\n          FOLLOWING\n\n        </div>\n\n  \n\n  \n\n  <div class="textActivity">\n\n      No recent activity.\n\n    </div>\n\n    <div class="textListen">\n\n        Check out some new music now\n\n    </div>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindfriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the FindfriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindfriendsPage = (function () {
    function FindfriendsPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FindfriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindfriendsPage');
        this.viewCtrl.setBackButtonText('');
    };
    return FindfriendsPage;
}());
FindfriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-findfriends',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\findfriends\findfriends.html"*/'<!--\n\n  Generated template for the FindfriendsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Find Friends</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="dark">\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\findfriends\findfriends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FindfriendsPage);

//# sourceMappingURL=findfriends.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modals_song_modals_song__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_select_select__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_collection_collection__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_spotifydata_spotifydata__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_findfriends_findfriends__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_playback_playback__ = __webpack_require__(201);
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
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_findfriends_findfriends__["a" /* FindfriendsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_playback_playback__["a" /* PlaybackPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
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
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_findfriends_findfriends__["a" /* FindfriendsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_playback_playback__["a" /* PlaybackPage */]
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

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    ModalsSongPage.prototype.changeButton = function () {
        this.status = !this.status;
    };
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
        selector: 'page-modals-song',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\modals-song\modals-song.html"*/'<ion-header no-border class="black">\n  <ion-toolbar color="toolbar">\n    <ion-buttons (click)="closeTapped()">\n      <button ion-button icon-right>\n        <ion-icon class="color" name="arrow-down"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="closeTapped()">\n      <button ion-button icon-left>\n        <ion-icon class="color" name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div class="artist">Playing music from\n      <p class="artist">Adele</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-slides spaceBetween="-60">\n    <ion-slide>\n      <img class="cover" src="SomeoneLikeYou.png">\n    </ion-slide>\n    <ion-slide>\n      <img class="cover" src="RollingIntheDeep.jpg">\n    </ion-slide>\n    <ion-slide>\n      <img class="cover" src="SetFiretotheRain.jpeg">\n    </ion-slide>\n  </ion-slides>\n  <div class="div">\n    <ion-icon class="add" name="add"></ion-icon>\n    <div class="song">\n      <p class="p1">Someone Like You</p>\n      <p class="p2">Adele</p>\n    </div>\n    <ion-icon class="more" name="more"></ion-icon>\n  </div>\n  <ion-item class="item" no-lines>\n    <ion-range min="0:00" max="4:00">\n      <ion-label range-left>0:00</ion-label>\n      <ion-label range-right>4:00</ion-label>\n    </ion-range>\n  </ion-item>\n  <div class="div1">\n    <ion-icon class="notShuffle" name="shuffle"></ion-icon>\n    <ion-icon class="backward" name="skip-backward"></ion-icon>\n    <ion-icon class="play" (click)="changeButton()" [name]="status? \'play\':\'pause\'"></ion-icon>\n    <ion-icon class="forward" name="skip-forward"></ion-icon>\n    <ion-icon class="notRepeat" name="repeat"></ion-icon>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\modals-song\modals-song.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ModalsSongPage);

//# sourceMappingURL=modals-song.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map