webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_song_modals_song__ = __webpack_require__(21);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar class="nav" color="dark">\n\n    <ion-title class="title">\n\n      <p class="ptitle">Home</p>\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen>\n\n  <br>\n\n  <div class="topic"><b>Concerts Near You</b></div>\n\n  <div class="desc">Upcoming Concerts by Artists You Love</div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="ben21.jpg"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Ben Hobbs\n\n          <p class="desc2">JAM CAFE</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="tw.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          The Rocket Whale\n\n          <p class="desc2">CHANGCHUI</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="11nov.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          JMSN\n\n          <p class="desc2">ROCKADEMY</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="17nov.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Ducktails\n\n          <p class="desc2">ROCKADEMY</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="21nov.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Pond\n\n          <p class="desc2">NAKARIN THEATRE</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="02dec.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          PREP, Telex Telexs\n\n          <p class="desc2">VOICE SPACE</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="11dec.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Shawn Mendes\n\n          <p class="desc2">IMPACT ARENA, MUANG THONG THANI</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="14dec.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Wonderfruit Festival 2017\n\n          <p class="desc2">THE FIELDS AT SIAM COUNTRY CLUB, PATTAYA</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="01jan.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          DJ ARGY\n\n          <p class="desc2">IMPACT ARENA, MUANG THONG THANI</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-scroll>\n\n\n\n  <br>\n\n\n\n  <div class="topic"><b>Recently Played</b></div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="mint.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          mint\n\n          <p class="desc2">Playlist • by Spotify</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="thaihit.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          เพลงฮิตประเทศไทย\n\n          <p class="desc2">Playlist • by Spotify</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="thaiyod.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          เพลงไทยยอดนิยม\n\n          <p class="desc2">Playlist • by Spotify</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="thaitop.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Thailand Top 50\n\n          <p class="desc2">Playlist • by spotifycharts</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-scroll>\n\n\n\n  <br>\n\n  <div class="topic"><b>Popular Playlists</b></div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="thaiyod.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          เพลงไทยยอดนิยม\n\n          <p class="desc2">15,710 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="thaihit.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          เพลงฮิตประเทศไทย\n\n          <p class="desc2">12,037 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="newmusic.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          New Music Friday Thailand\n\n          <p class="desc2">4,058 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="mint.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          mint\n\n          <p class="desc2">4,530,875 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="vivalatino.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Viva Latino-Top 50\n\n          <p class="desc2">6,168,761 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="anime.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          アニメ&amp;ANIME!\n\n          <p class="desc2"> 35,671 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="jrock.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          J-Rock Now\n\n          <p class="desc2"> 39,247 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="rockanthems.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Rock Anthems Japan\n\n          <p class="desc2"> 13,110 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="dream.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          This is: DREAMS COME TRUE\n\n          <p class="desc2"> 11,025 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </ion-scroll>\n\n  <br>\n\n\n\n  <div class="topic"><b>Charts</b></div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="globaltop.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Global Top 50\n\n          <p class="desc2">10,462,457 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="thaitop.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Thailand Top 50\n\n          <p class="desc2"> 7,853 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-img src="thaiviral.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Thailand Viral 50\n\n          <p class="desc2"> 2,616 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </ion-scroll>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer">\n\n    <ion-buttons class="button" (click)="modalsTapped()">\n\n      <button ion-button icon-right>\n\n        <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title class="position" (click)="modalsTapped()">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs -\n\n            <p class="artist">Artists</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs2 -\n\n            <p class="artist">Artists2</p>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button ion-left (click)="changeButton()">\n\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n        </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_setting_setting__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spotifydata_spotifydata__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_song_modals_song__ = __webpack_require__(21);
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
        selector: 'page-collection',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\collection\collection.html"*/'<!--\n\n  Generated template for the CollectionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark" class="opacity" hideBackButton>\n\n\n\n    <!-- <ion-buttons start>\n\n              <button ion-button round (click)="openModel()">\n\n                <img src="user.png">\n\n                <ion-icon name="contact"></ion-icon>\n\n              </button>\n\n            </ion-buttons> -->\n\n\n\n    <ion-avatar style="padding-left:10px;" (click)="profile(profile)">\n\n      <img class="avatar" src="user.png">\n\n    </ion-avatar>\n\n\n\n    <ion-title>Your Library</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="setting()">\n\n                <ion-icon name="settings"></ion-icon>\n\n              </button>\n\n\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" fullscreen>\n\n  <ion-list no-lines>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n      <ion-icon name="musical-notes" item-start></ion-icon>\n\n      Playlists\n\n    </button>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n        <ion-icon name="musical-note" item-start></ion-icon>\n\n        Songs\n\n      </button>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n          <ion-icon name="disc" item-start></ion-icon>\n\n          Albums\n\n        </button>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n            <ion-icon name="headset" item-start></ion-icon>\n\n            Artists\n\n          </button>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n              <ion-icon name="radio" item-start></ion-icon>\n\n              Podcasts\n\n          </button>\n\n\n\n    <ion-item class="ion-content">\n\n      <ion-label start>Recently Played</ion-label>\n\n      <!-- <button ion-button clear item-end class="ion-content" (click)="openModel()">Edit</button> -->\n\n    </ion-item>\n\n\n\n    <div class="text2">\n\n      Music you\'ve listened to will appear here.\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer">\n\n    <ion-buttons class="button" (click)="modalsTapped()">\n\n      <button ion-button icon-right>\n\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title class="position" (click)="modalsTapped()">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs -\n\n            <p class="artist">Artists</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs2 -\n\n            <p class="artist">Artists2</p>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button ion-left (click)="changeButton()">\n\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n        </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\collection\collection.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CollectionPage);

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifydataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
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

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_select__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collection_collection__ = __webpack_require__(105);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Browse" tabIcon="musical-notes"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Your Library" tabIcon="albums"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__ = __webpack_require__(21);
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
        this.filterSong = [];
        this.songlists = [];
        this.filterArtist = [];
        this.songlists = [
            { song: "Someone Like You", artist: "Adele" },
            { song: "I started a joke", artist: "Bee Gees" },
            { song: "Reflection", artist: "Christina Aguilera" }
        ];
    }
    SearchPage.prototype.search = function (event) {
        if (event.target.value) {
            if (event.target.value.length > 0) {
                var filterJsonSong = this.songlists.filter(function (row) {
                    if (row.song.indexOf(event.target.value) != -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                var filterJsonArtist = this.songlists.filter(function (row) {
                    if (row.artist.indexOf(event.target.value) != -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                this.isFiltered = true;
                this.filterSong = filterJsonSong;
                this.filterArtist = filterJsonArtist;
                if (this.filterSong.length <= 0 && this.filterArtist.length <= 0) {
                    this.shown = false;
                }
                else {
                    this.shown = true;
                }
            }
            else {
                this.isFiltered = false;
            }
        }
        else {
            this.isFiltered = false;
        }
    };
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
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar color="dark" class="opacity">\n\n\n\n    \n\n    <ion-searchbar placeholder="Search" showCancelButton (ionInput)="search($event)"></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="camera()">\n\n        <ion-icon name="camera"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" fullscreen>\n\n  <span *ngIf="!isFiltered">\n\n    <img class="picture" src="search.png">\n\n    <div class="divtext">\n\n      <p class="text">\n\n        Search Spotify\n\n      </p>\n\n\n\n      <p class="text2">\n\n        Find your favorite songs, artists,\n\n        <br> albums, podcasts, playlists and friends.\n\n      </p>\n\n    </div>\n\n  </span>\n\n\n\n\n\n  <ion-list *ngIf="isFiltered" class="showResult" no-lines>\n\n\n\n    <span>\n\n      <p *ngIf="shown==true" class="result">Top Result</p>\n\n      <ion-item *ngFor="let pointer of filterSong">\n\n        <img class="img" src="{{pointer.artist}}.jpg" align="left"> &nbsp; &nbsp; {{pointer.song}} \n\n        <p>&nbsp; &nbsp; {{pointer.artist}}</p>\n\n      </ion-item>\n\n      \n\n      <p *ngIf="shown==true" class="result">Artists</p>\n\n      <ion-item *ngFor="let pointer of filterArtist">\n\n        <ion-avatar item-start>\n\n          <img src="{{pointer.artist}}.jpg">\n\n        </ion-avatar> {{pointer.artist}}\n\n      </ion-item>\n\n    </span>\n\n\n\n    <span *ngIf="shown==false">\n\n      <img class="picture" src="search.png">\n\n      <div class="divtext">\n\n        <p class="text">\n\n          Search Spotify\n\n        </p>\n\n\n\n        <p class="text2">\n\n          Find your favorite songs, artists,\n\n          <br> albums, podcasts, playlists and friends.\n\n        </p>\n\n      </div>\n\n    </span>\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer">\n\n    <ion-buttons class="button">\n\n      <button ion-button icon-right (click)="modalsTapped()">\n\n        <ion-icon name="arrow-up" class="buttonColor"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title class="position" (click)="modalsTapped()">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs -\n\n            <p class="artist">Artists</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs2 -\n\n            <p class="artist">Artists2</p>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button ion-left (click)="changeButton()">\n\n        <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'">\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(52);
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
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SharePage = (function () {
    function SharePage(socialSharing, navCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SharePage.prototype.shareEmail = function () {
        var _this = this;
        this.socialSharing.canShareViaEmail().then(function () {
            _this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
        }).catch(function () {
            console.log('Error');
        });
    };
    SharePage.prototype.shareTwitter = function () {
        this.socialSharing.shareViaTwitter('ionic test', null, null);
    };
    SharePage.prototype.shareFacebook = function () {
        this.socialSharing.shareViaFacebook('ionic test', null, null);
    };
    SharePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharePage');
    };
    return SharePage;
}());
SharePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-share',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\share\share.html"*/'<!--\n  Generated template for the SharePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="toolbar">\n    <ion-title>Share</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background">\n  <ion-list no-lines>\n    <button class="background" ion-item full (click)="shareEmail()">\n      <ion-icon class="icon" name="mail" item-start></ion-icon>\n      Email\n    </button>\n    <button class="background" ion-item full (click)="shareTwitter()">\n      <ion-icon class="icon" name="twitter" item-start></ion-icon>\n      Twitter\n    </button>\n    <button class="background" ion-item full (click)="shareFacebook()">\n      <ion-icon class="icon" name="facebook" item-start></ion-icon>\n      Facebook\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\share\share.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SharePage);

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__ = __webpack_require__(21);
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
        selector: 'page-select',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\select\select.html"*/'<!--\n\n  Generated template for the SelectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar class="nav" color="dark">\n\n    <ion-title class="title">\n\n      <p class="ptitle">Browse</p>\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen>\n\n  <br>\n\n  <div class="topic" style="margin-bottom: 5px;"><b>นอนหลับฝันดี</b></div>\n\n  <ion-scroll scrollX="true" direction="x">\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="sleeptight.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Sleep Tight\n\n          <p class="desc2">496,743 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="piano.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          The Piano Bar\n\n          <p class="desc2">364,804 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="homerong.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          โหมโรง\n\n          <p class="desc2">1,686 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="sleepmachine.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          The Sleep Machine: Rainforest\n\n          <p class="desc2">193,508 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="classical.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Classical Moments in Movies\n\n          <p class="desc2">93,685 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="88keys.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          88 Keys\n\n          <p class="desc2">217,414 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="minimalism.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Minimalism\n\n          <p class="desc2">79,239 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="ocean.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Ocean Escapes\n\n          <p class="desc2">215,930 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="zen.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Zen | Indie Folk for Focus\n\n          <p class="desc2">507,915 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="piano100.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Piano 100: Spotify Picks\n\n          <p class="desc2">122,336 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="tender.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Tender\n\n          <p class="desc2">19,783 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="scroll">\n\n      <ion-card-content>\n\n        <ion-img class="scroll" src="peaceful.png"></ion-img>\n\n        <ion-card-header class="artist">\n\n          Peaceful Piano\n\n          <p class="desc2">3,193,201 FOLLOWERS</p>\n\n        </ion-card-header>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </ion-scroll>\n\n\n\n  <ion-list no-lines class="ion-content">\n\n    <button ion-item full outline class="ion-content">\n\n        <ion-icon name="trending-up" item-start></ion-icon>\n\n        Charts\n\n      </button>\n\n    <button ion-item full outline class="ion-content">\n\n          <ion-icon name="calendar" item-start></ion-icon>\n\n          New Releases\n\n      </button>\n\n    <button ion-item full outline class="ion-content">\n\n            <ion-icon c name="radio" item-start></ion-icon>\n\n            Podcasts\n\n      </button>\n\n    <button ion-item full outline class="ion-content">\n\n              <ion-icon name="ionic" item-start></ion-icon>\n\n              Discover\n\n      </button>\n\n    <button ion-item full outline class="ion-content">\n\n                <ion-icon name="videocam" item-start></ion-icon>\n\n                Concerts\n\n      </button>\n\n  </ion-list>\n\n\n\n  <div class="topic"><b>Genres &amp; Moods </b></div>\n\n  <button ion-button class="type1">\n\n      <img class="img" src="pop.png" />\n\n      <!-- <img class="card-title" src="xylophone.png"/> -->\n\n      <div class="card-subtitle">Pop</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="thaimu.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Thai Music</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="mood.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Mood</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="chill.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Chill</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="romance.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Romance</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="kpop.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">K-Pop</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="focus.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Focus</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="sleep.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Sleep</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="rock.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Rock</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="party.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Party</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="artists.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Artists</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="trending.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Trending</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="hiphop.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Hip-Hop</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="electronic.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Electronic/Dance</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="decades.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Decades</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="jazz.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Jazz</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="jtracks.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">J-Tracks</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="workout.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Workout</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="travel.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Travel</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="indie.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Indie</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="rb.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">R &amp; B</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="tv.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">TV &amp; Movies</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="run.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <!-- <div class="card-subtitle">Running</div> -->\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="soul.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Soul</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="country.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Country</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="karaoke.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Karaoke</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="latin.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Latin</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="punk.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Punk</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="gaming.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Gaming</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="folk.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Folk &amp; Americana</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="reggae.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Reggae</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="Funk.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Funk</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="dinner.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Dinner</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="metal.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Metal</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="Blues.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Blues</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="kids.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Kids  Family</div>\n\n    </button>\n\n\n\n  <button ion-button class="type1">\n\n        <img class="img" src="class.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Classical</div>\n\n    </button>\n\n\n\n  <button ion-button class="type2">\n\n        <img class="img" src="fresh.png" />\n\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n\n        <div class="card-subtitle">Fresh Finds</div>\n\n    </button>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer">\n\n    <ion-buttons class="button" (click)="modalsTapped()">\n\n      <button ion-button icon-right>\n\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title class="position" (click)="modalsTapped()">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs -\n\n            <p class="artist">Artists</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs2 -\n\n            <p class="artist">Artists2</p>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button ion-left (click)="changeButton()">\n\n            <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\select\select.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SelectPage);

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_playback_playback__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_song_modals_song__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(207);
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
    function SettingPage(modalCtrl, alertCtrl, viewCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SettingPage.prototype.playback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_playback_playback__["a" /* PlaybackPage */]);
    };
    SettingPage.prototype.modalsTapped = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_song_modals_song__["a" /* ModalsSongPage */]);
        modal.present();
    };
    SettingPage.prototype.changeButton = function () {
        this.status = !this.status;
        console.log(this.status);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the CollectionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark" class="opacity">\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" fullscreen text-center>\n\n  <ion-list no-lines>\n\n\n\n    <button ion-item full outline class="ion-content">\n\n      Account\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content" (click)="playback()">\n\n      Playback\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n      Devices\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n       Social\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n      Music Quality\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n        Notifications\n\n    </button>\n\n    <p></p>\n\n    <button ion-item full outline class="ion-content">\n\n        About\n\n      </button>\n\n    <p></p>\n\n    <button ion-button class="buttonLogout" round (click)="presentConfirm()">\n\n        LOG OUT\n\n      </button>\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer">\n\n    <ion-buttons class="button" (click)="modalsTapped()">\n\n      <button ion-button icon-right>\n\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title class="position" (click)="modalsTapped()">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs -\n\n            <p class="artist">Artists</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs2 -\n\n            <p class="artist">Artists2</p>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button ion-left (click)="changeButton()">\n\n            <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaybackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__ = __webpack_require__(21);
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
    function PlaybackPage(modalCtrl, viewCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
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
    PlaybackPage.prototype.modalsTapped = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__["a" /* ModalsSongPage */]);
        modal.present();
    };
    PlaybackPage.prototype.changeButton = function () {
        this.status = !this.status;
        console.log(this.status);
    };
    return PlaybackPage;
}());
PlaybackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-playback',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\playback\playback.html"*/'<!--\n\n  Generated template for the PlaybackPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="dark" class="opacity">\n\n        <ion-title>Playback</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" fullscreen>\n\n\n\n    <ion-list no-lines>\n\n\n\n\n\n        <button ion-item full outline class="listtext">\n\n        Equaliser\n\n    </button>\n\n\n\n        <ion-item class="listtext">\n\n            <ion-label>Offline</ion-label>\n\n            <ion-toggle color="secondary"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <div class="text">\n\n            When you go offline, you\'ll only be able to play the music and podcasts you\'ve downloaded.\n\n        </div>\n\n        <br><br>\n\n\n\n        <div text-center class="text2">\n\n            Crossfade\n\n        </div>\n\n\n\n        <ion-item class="ion-content">\n\n            <ion-range min="0" max="12" pin="true" color="secondary">\n\n                <label range-left small>0s</label>\n\n                <label range-right small>12s</label>\n\n            </ion-range>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item class="ion-content">\n\n            <ion-label>Gapless Playback</ion-label>\n\n            <ion-toggle [(ngModel)]="data.gap" color="secondary"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item class="listtext">\n\n            <ion-label>Hide Unplayable Songs</ion-label>\n\n            <ion-toggle [(ngModel)]="data.hide" color="secondary"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item class="listtext">\n\n            <ion-label>Enable Audio Normalisation</ion-label>\n\n            <ion-toggle [(ngModel)]="data.enable" color="secondary"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item class="listtext">\n\n            <ion-label>Play Feedback Sounds</ion-label>\n\n            <ion-toggle [(ngModel)]="data.play" color="secondary"></ion-toggle>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="dark" class="footer">\n\n      <ion-buttons class="button" (click)="modalsTapped()">\n\n        <button ion-button icon-right>\n\n            <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  \n\n      <ion-title class="position" (click)="modalsTapped()">\n\n        <ion-slides>\n\n          <ion-slide>\n\n            <div class="song">\n\n              Songs -\n\n              <p class="artist">Artists</p>\n\n            </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <div class="song">\n\n              Songs2 -\n\n              <p class="artist">Artists2</p>\n\n            </div>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button ion-left (click)="changeButton()">\n\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\playback\playback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PlaybackPage);

//# sourceMappingURL=playback.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_loginface_loginface__ = __webpack_require__(208);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    // FB_APP_ID: 312414275832004;
    function LoginPage(alertCtrl, nativeAudio, socialSharing, nativeStorage, navCtrl, navParams, facebook) {
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.socialSharing = socialSharing;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        // this.facebook.browserInit(this.FB_APP_ID);
    }
    // loginFB() {
    //   let permissions = new Array<string>();
    //   let nav = this.navCtrl;
    //   permissions = ["public_profile"];
    //   this.facebook.login(permissions)
    //     .then((response) => {
    //       let userId = response.authResponse.userID;
    //       let params = new Array<string>();
    //       this.facebook.api("/me?fields=name,gender", params)
    //         .then((user) => {
    //           user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
    //           this.nativeStorage.setItem('user',
    //             {
    //               name: user.name,
    //               gender: user.gender,
    //               picture: user.picture
    //             })
    //             .then(() => {
    //               nav.push(HomePage);
    //             }, (error) => {
    //               console.log(error);
    //             })
    //         })
    //     }, (error) => {
    //       console.log(error);
    //     });
    // }
    LoginPage.prototype.share3 = function () {
        var _this = this;
        this.socialSharing.canShareVia('com.apple.social.facebook', 'hello', 'subject', 'image', 'url').then(function () {
            _this.socialSharing.shareViaFacebook('hello', 'image', 'url');
        }).catch(function () {
            console.log('Error');
        });
    };
    // ionViewDidLoad(){
    //   this.nativeAudio.preloadSimple('audio1','audio/TheBlaze.mp3');
    //   this.nativeAudio.preloadComplex('audio2', 'clickSound.mp3', 1, 1, 0);
    //   console.log('ionViewDidLoad LoginPage');
    // }
    LoginPage.prototype.loginface = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_loginface_loginface__["a" /* LoginfacePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content fullscreen>\n\n    <img class="picture" src="spotify_logo.png">\n\n<!-- \n\n    <ion-slides pager>\n\n        <ion-slide *ngFor="let slide of slides">\n\n          <ion-toolbar>\n\n            <ion-buttons end>\n\n              <button ion-button color="primary">Skip</button>\n\n            </ion-buttons>\n\n          </ion-toolbar>\n\n          <img [src]="slide.image" class="slide-image"/>\n\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n          <p [innerHTML]="slide.description"></p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-toolbar>\n\n          </ion-toolbar>\n\n          <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n\n          <h2 class="slide-title">Ready to Play?</h2>\n\n          <button ion-button large clear icon-end color="primary">\n\n            Continue\n\n            <ion-icon name="arrow-forward"></ion-icon>\n\n          </button>\n\n        </ion-slide>\n\n      </ion-slides> -->\n\n\n\n  <!-- <ion-buttons>\n\n    <button class="fb" ion-button (click)="loginFB()">\n\n      login with FACEBOOK\n\n    </button>\n\n    <button ion-button (click)="share2()">Sharing</button>\n\n    <button ion-button (click)="share3()">Sharing</button>\n\n\n\n    <button ion-button (click)="playAudio()">Play</button>\n\n    <button ion-button (click)="stopAudio()">Stop</button>\n\n\n\n    <button ion-button (click)="loginface()">LOG IN</button>\n\n    \n\n  </ion-buttons> -->\n\n  <ion-buttons text-center>\n\n      <button ion-button class="create" round>\n\n        CREATE ACCOUNT\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <div class="already" text-center>\n\n      Already a user?\n\n    </div>\n\n\n\n  <ion-buttons text-center>\n\n      <button ion-button class="login" round (click)="loginface()">\n\n        LOG IN\n\n      </button>\n\n    </ion-buttons>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(104);
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
 * Generated class for the LoginfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginfacePage = (function () {
    function LoginfacePage(nativeStorage, facebook, viewCtrl, navCtrl, navParams) {
        this.nativeStorage = nativeStorage;
        this.facebook = facebook;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook.browserInit(this.FB_APP_ID);
    }
    LoginfacePage.prototype.loginFB = function () {
        var _this = this;
        var permissions = new Array();
        var nav = this.navCtrl;
        permissions = ["public_profile"];
        this.facebook.login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            _this.facebook.api("/me?fields=name,gender", params)
                .then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                _this.nativeStorage.setItem('user', {
                    name: user.name,
                    gender: user.gender,
                    picture: user.picture
                })
                    .then(function () {
                    nav.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }, function (error) {
                    console.log(error);
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    LoginfacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginfacePage');
        this.viewCtrl.setBackButtonText('');
    };
    return LoginfacePage;
}());
LoginfacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loginface',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\loginface\loginface.html"*/'<!--\n\n  Generated template for the LoginfacePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark" text-center>\n\n    <ion-title>LOG IN</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content" text-center>\n\n\n\n  <ion-buttons>\n\n    <button ion-button class="fb" round (click)="loginFB()">\n\n      LOG IN WITH FACEBOOK\n\n    </button>\n\n  </ion-buttons>\n\n\n\n  <div class="or">\n\n    or\n\n  </div>\n\n\n\n\n\n  <!-- <ion-item>\n\n      <ion-input type="text" placeholder="Username or email"></ion-input>\n\n    </ion-item>\n\n <br>\n\n  <ion-item>\n\n    <ion-input type="password" placeholder="Password"></ion-input>\n\n  </ion-item> -->\n\n\n\n  <ion-item class="padding" full outline>\n\n    <ion-icon name="person" item-start></ion-icon>\n\n    <ion-input type="text" placeholder="Username or email"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <ion-item class="padding" full outline>\n\n    <ion-icon name="lock" item-start></ion-icon>\n\n    <ion-input type="password" placeholder="Password"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-buttons>\n\n    <button ion-button class="login" round>\n\n      LOG IN\n\n    </button>\n\n  </ion-buttons>\n\n\n\n  <div class="forgot">\n\n    Forgot your password?\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\loginface\loginface.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginfacePage);

//# sourceMappingURL=loginface.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsSongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_share__ = __webpack_require__(203);
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
    function ModalsSongPage(socialSharing, nativeAudio, navCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.nativeAudio = nativeAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startSong = 0.00;
    }
    // play(){
    //   this.nativeAudio.preloadComplex('clickSound', 'assets/clickSound.mp3', 1, 1, 0).then(this.onSuccessPreloading, this.onError);
    // }
    // onSuccessPreloading = (data) => {
    //   console.log('success preloading', data);
    //   this.nativeAudio.play('track1').then(this.onSuccessPlaying, this.onError);
    // }
    ModalsSongPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalsSongPage');
        this.nativeAudio.preloadComplex('audio2', 'clickSound.mp3', 1, 1, 0);
    };
    ModalsSongPage.prototype.sharePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__share_share__["a" /* SharePage */]);
    };
    ModalsSongPage.prototype.playAudio = function () {
        this.nativeAudio.play('audio2', function () { return console.log('audio2 is done playing'); });
        // const alert = this.alertCtrl.create({
        //   title: 'Played',
        //   subTitle: 'Song has played',
        //   buttons: ['OK']
        // });
        // alert.present();
    };
    ModalsSongPage.prototype.stopAudio = function () {
        this.nativeAudio.stop('audio2'), function () { return console.log('audio2 is done stopped'); };
        // const alert = this.alertCtrl.create({
        //   title: 'Stopped',
        //   subTitle: 'Song has stopped',
        //   buttons: ['OK']
        // });
        // alert.present();
    };
    ModalsSongPage.prototype.changeShuffle = function () {
        this.shuffle = !this.shuffle;
    };
    ModalsSongPage.prototype.changeRepeat = function () {
        this.repeat = !this.repeat;
        if (this.repeat == true) {
            this.nativeAudio.loop('audio2');
        }
    };
    ModalsSongPage.prototype.changeButton = function () {
        this.status = !this.status;
        if (this.status == true) {
            this.nativeAudio.play('audio2', function () { return console.log('audio2 is done playing'); });
        }
        else {
            this.nativeAudio.stop('audio2'), function () { return console.log('audio2 is done stopped'); };
        }
    };
    ModalsSongPage.prototype.closeTapped = function () {
        this.navCtrl.pop();
    };
    return ModalsSongPage;
}());
ModalsSongPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modals-song',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\modals-song\modals-song.html"*/'<ion-header no-border class="black">\n\n  <ion-toolbar color="toolbar">\n\n    <ion-buttons (click)="closeTapped()">\n\n      <button ion-button icon-right>\n\n        <ion-icon class="color" name="arrow-down"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end (click)="closeTapped()">\n\n      <button ion-button icon-left>\n\n        <ion-icon class="color" name="list"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <div class="artist">Playing music from\n\n      <p class="artist">The Blaze</p>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen>\n\n  <ion-slides spaceBetween="-60">\n\n    <ion-slide>\n\n      <img class="cover" src="blaze.png">\n\n    </ion-slide>\n\n    <ion-slide>       \n\n      <img class="cover" src="RollingIntheDeep.jpg">\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img class="cover" src="SetFiretotheRain.jpeg">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  \n\n  <div class="div">\n\n    <ion-icon class="add" name="add"></ion-icon>\n\n    <div class="song">\n\n      <p class="p1">Territory</p>\n\n      <p class="p2">The Blaze</p>\n\n    </div>\n\n    <ion-icon class="share-alt" name="share-alt" (click)="sharePage()"></ion-icon>\n\n  </div>\n\n  <ion-item class="item" no-lines>\n\n    <ion-range [(ngModel)]="startSong" min="0.00" max="4.00">\n\n      <ion-label range-left>0:00</ion-label>\n\n      <ion-label range-right>4:00</ion-label>\n\n    </ion-range>\n\n  </ion-item>\n\n  <div class="div1">\n\n    <ion-icon [ngClass]="{shuffle:shuffle==true}" class="notShuffle" name="shuffle" (click)="changeShuffle()" ></ion-icon>\n\n    <ion-icon class="backward" name="skip-backward"></ion-icon>\n\n    <ion-icon class="play"  (click)="changeButton()" [name]="status? \'pause\':\'play\'"></ion-icon>\n\n    <ion-icon class="forward" name="skip-forward"></ion-icon>\n\n    <ion-icon [ngClass]="{repeat:repeat==true}" class="notRepeat" name="repeat"  (click)="changeRepeat()"></ion-icon>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\modals-song\modals-song.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ModalsSongPage);

//# sourceMappingURL=modals-song.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spotifydata_spotifydata__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_collection_collection__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_findfriends_findfriends__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_song_modals_song__ = __webpack_require__(21);
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
    function ProfilePage(modalCtrl, viewCtrl, spotify, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
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
    ProfilePage.prototype.modalsTapped = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modals_song_modals_song__["a" /* ModalsSongPage */]);
        modal.present();
    };
    ProfilePage.prototype.changeButton = function () {
        this.status = !this.status;
        console.log(this.status);
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
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar hideBackButton>\n\n\n\n    <ion-icon name="arrow-back" class="backIcon" color="light" (click)="back()"></ion-icon>\n\n\n\n      <img class="image" src="user.png">\n\n    \n\n    <div class="textName">\n\n      Sukolawat\n\n    </div>\n\n  <div text-center>\n\n    <button class=" buttonFriend" ion-button round small (click)="findfriends()"> \n\n            <div class="textFriend">\n\n               FIND FRIENDS \n\n              </div>\n\n        </button>\n\n  </div>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content  class="ion-content" fullscreen>\n\n  <!-- <img src ={{ImageUrl}} class="picture">\n\n  <div class="text">\n\n    Mr.Spotify the Jook Slayer\n\n  </div>\n\n  <button ion-button color="light" round small class="button">\n\n      Find friends\n\n  </button> -->\n\n\n\n\n\n  <div class="playList1" (tap)="tapEvent1($event)">\n\n    {{tap1}}\n\n  </div>\n\n  <div class="follower1" (tap)="tapEvent2($event)">\n\n    {{tap2}}\n\n  </div>\n\n  <div class="following1" (tap)="tapEvent3($event)">\n\n    {{tap3}}\n\n  </div>\n\n\n\n\n\n  <div class="playList2">\n\n    PLAYLISTS\n\n  </div>\n\n\n\n  <div class="follower2">\n\n    FOLLOWERS\n\n  </div>\n\n\n\n  <div class="following2">\n\n    FOLLOWING\n\n  </div>\n\n\n\n\n\n  <div class="textActivity">\n\n    No recent activity.\n\n  </div>\n\n  <div class="textListen">\n\n    Check out some new music now\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="dark" class="footer">\n\n    <ion-buttons class="button" (click)="modalsTapped()">\n\n      <button ion-button icon-right>\n\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title class="position" (click)="modalsTapped()">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs -\n\n            <p class="artist">Artists</p>\n\n          </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <div class="song">\n\n            Songs2 -\n\n            <p class="artist">Artists2</p>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button ion-left (click)="changeButton()">\n\n            <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindfriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__ = __webpack_require__(21);
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
    function FindfriendsPage(modalCtrl, alertCtrl, viewCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.friendLists = [];
        this.selectedTab = "friend";
        this.filterFriend = [];
        this.featuredLists = [];
        this.friendLists = [
            { name: "Alizabeth", image: "Alizabeth" },
            { name: "Bell Laymax", image: "Bell" },
            { name: "Carlon Welv", image: "Carlon" },
            { name: "Debby", image: "Debby" },
            { name: "Frediorie", image: "Frediorie" },
            { name: "George Bruise", image: "George" },
            { name: "Lowson", image: "Lowson" },
            { name: "Monorica", image: "Monorica" },
            { name: "Nolan Hammer", image: "Nolan" },
            { name: "Piyachai Chalermpon", image: "Piyachai" },
            { name: "Sakito Homotaru", image: "Sakito" },
        ];
        this.featuredLists = [
            { name: "Spotify", image: "Spotify" },
            { name: "Coca-Cola", image: "Coke" },
            { name: "Calvin Harris", image: "Calvin" },
            { name: "BCC Tero Music", image: "BCC" },
            { name: "GMM Grammy", image: "Grammy" },
            { name: "RS", image: "RS" },
        ];
        this.amountFriend = this.friendLists.length;
    }
    FindfriendsPage.prototype.searchFriend = function (event) {
        if (event.target.value) {
            if (event.target.value.length > 0) {
                var filterJson = this.friendLists.filter(function (row) {
                    if (row.name.indexOf(event.target.value) != -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                this.isFiltered = true;
                this.filterFriend = filterJson;
            }
            else {
                this.isFiltered = false;
            }
        }
        else {
            this.isFiltered = false;
        }
    };
    FindfriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindfriendsPage');
        this.viewCtrl.setBackButtonText('');
    };
    FindfriendsPage.prototype.follow = function (amountFriend) {
        var alert = this.alertCtrl.create({
            title: 'Find Friends',
            message: 'Are you sure you want to follow all ' + amountFriend + ' of your friends?',
            buttons: [
                {
                    text: 'Follow all ' + amountFriend + ' friends',
                    role: 'follow',
                    handler: function () {
                        console.log('follow clicked');
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    FindfriendsPage.prototype.modalsTapped = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_song_modals_song__["a" /* ModalsSongPage */]);
        modal.present();
    };
    FindfriendsPage.prototype.changeButton = function () {
        this.status = !this.status;
        console.log(this.status);
    };
    return FindfriendsPage;
}());
FindfriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-findfriends',template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\findfriends\findfriends.html"*/'<!--\n\n  Generated template for the FindfriendsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="toolbar">\n\n        <ion-title>Find Friends</ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar mode="md" color="dark">\n\n        <ion-segment mode="md" [(ngModel)]="selectedTab" color="secondary">\n\n            <ion-segment-button value="friend">\n\n                <div class="text">FRIENDS</div>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="featured">\n\n                <div class="text">FEATURED</div>\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content text-center class="ion-content" fullscreen>\n\n    <span *ngIf="selectedTab==\'friend\'">\n\n        <button class=" buttonFriend" ion-button round medium (click)="follow(amountFriend)">\n\n            <div class="textFriend">\n\n                FOLLOW ALL ({{amountFriend}})\n\n            </div>\n\n        </button>\n\n        <ion-searchbar placeholder="Filter" showCancelButton (ionInput)="searchFriend($event)"></ion-searchbar>\n\n\n\n        <ion-list *ngIf="!isFiltered" no-lines>\n\n            <ion-item *ngFor="let pointer of friendLists">\n\n                <ion-avatar item-start>\n\n                    <img src="asset/{{pointer.image}}.jpg">\n\n                </ion-avatar> {{pointer.name}}\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="isFiltered" no-lines>\n\n            <ion-item *ngFor="let pointer of filterFriend">\n\n                <ion-avatar item-start>\n\n                    <img src="asset/{{pointer.image}}.jpg">\n\n                </ion-avatar> {{pointer.name}}\n\n            </ion-item>\n\n        </ion-list>\n\n    </span>\n\n\n\n    <span *ngIf="selectedTab==\'featured\'">\n\n\n\n        <ion-list no-lines>\n\n            <ion-item *ngFor="let pointer of featuredLists">\n\n                <ion-avatar item-start>\n\n                    <img src="{{pointer.image}}.jpg">\n\n                </ion-avatar> {{pointer.name}}\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n    </span>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="dark" class="footer">\n\n      <ion-buttons class="button" (click)="modalsTapped()">\n\n        <button ion-button icon-right>\n\n            <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  \n\n      <ion-title class="position" (click)="modalsTapped()">\n\n        <ion-slides>\n\n          <ion-slide>\n\n            <div class="song">\n\n              Songs -\n\n              <p class="artist">Artists</p>\n\n            </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <div class="song">\n\n              Songs2 -\n\n              <p class="artist">Artists2</p>\n\n            </div>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button ion-left (click)="changeButton()">\n\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\pages\findfriends\findfriends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FindfriendsPage);

//# sourceMappingURL=findfriends.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modals_song_modals_song__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_select_select__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_collection_collection__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_spotifydata_spotifydata__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_findfriends_findfriends__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_playback_playback__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_audio__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_loginface_loginface__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_share_share__ = __webpack_require__(203);
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
            __WEBPACK_IMPORTED_MODULE_17__pages_findfriends_findfriends__["a" /* FindfriendsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_playback_playback__["a" /* PlaybackPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_loginface_loginface__["a" /* LoginfacePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_share_share__["a" /* SharePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */]
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
            __WEBPACK_IMPORTED_MODULE_25__pages_share_share__["a" /* SharePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_findfriends_findfriends__["a" /* FindfriendsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_playback_playback__["a" /* PlaybackPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_loginface_loginface__["a" /* LoginfacePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_audio__["a" /* NativeAudio */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
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
        // @ViewChild('myNav')nav;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngAfterViewInit = function () {
        // this.nav.push(LoginPage);
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\app\app.html"*/'<ion-nav #myNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Weerapat\Desktop\Hybrid\ionic_spotify\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map