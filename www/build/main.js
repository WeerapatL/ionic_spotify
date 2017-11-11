webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_loginface_loginface__ = __webpack_require__(202);
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
    function LoginPage(alertCtrl, nativeAudio, socialSharing, nativeStorage, navCtrl, navParams, facebook) {
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.socialSharing = socialSharing;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.slides = [
            {
                title: "Welcome",
                description: "Sign up for free music on your phone, tablet and computer.",
            },
            {
                title: "Browse",
                description: "Explore top tracks, new releases and the right playlist for every moment.",
            },
            {
                title: "Search",
                description: "Looking for that special album or artist? <br>Just search and hit Play!",
            },
            {
                title: "Running",
                description: "Music that perfectly matches <br> your tempo.",
            },
            {
                title: "Your Library",
                description: "save any song, album or artist to your own music collection.",
            }
        ];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginface = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_loginface_loginface__["a" /* LoginfacePage */]);
    };
    LoginPage.prototype.share2 = function () {
        var _this = this;
        this.socialSharing.canShareViaEmail().then(function () {
            _this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
        }).catch(function () {
            console.log('Error');
        });
    };
    LoginPage.prototype.shareEmail = function () {
        var _this = this;
        this.socialSharing.canShareViaEmail().then(function () {
            _this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
        }).catch(function () {
            console.log('Error');
            var alert = _this.alertCtrl.create({
                title: 'Log Out',
                message: 'Are you sure you want to log out?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<!-- <ion-content fullscreen class="tutorial-page">\n\n  <img class="picture" src="spotify_logo.png">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <h2 class="slide-title">Ready to Play?</h2>\n    </ion-slide>\n  </ion-slides>\n\n\n  <ion-buttons text-center>\n    <button ion-button class="create" round>\n      CREATE ACCOUNT\n    </button>\n  </ion-buttons>\n\n  <div class="already" text-center>\n    Already a user?\n  </div>\n\n  <ion-buttons text-center>\n    <button ion-button class="login" round (click)="loginface()">\n      LOG IN\n    </button>\n  </ion-buttons>\n</ion-content> -->\n\n  \n  <ion-content fullscreen class="tutorial-page">\n\n      <img class="picture" src="spotify_logo.png">\n      <!-- <ion-buttons text-center>\n          <button ion-button class="login" round (click)="shareEmail()">\n            share\n          </button>\n        </ion-buttons> -->\n\n    <ion-slides pager style="max-height:200px;margin-top: 80px" autoplay="3800" loop="true" speed="500">\n      <ion-slide *ngFor="let slide of slides">   \n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        <p [innerHTML]="slide.description"></p>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-buttons text-center>\n        <button ion-button class="create" round>\n          CREATE ACCOUNT\n        </button>\n      </ion-buttons>\n    \n      <div class="already" text-center>\n        Already a user?\n      </div>\n    \n      <ion-buttons text-center>\n        <button ion-button class="login" round (click)="loginface()">\n          LOG IN\n        </button>\n      </ion-buttons>\n  </ion-content>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_select__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collection_collection__ = __webpack_require__(108);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Browse" tabIcon="musical-notes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Your Library" tabIcon="albums"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_setting_setting__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spotifydata_spotifydata__ = __webpack_require__(109);
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
        selector: 'page-collection',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\collection\collection.html"*/'<!--\n  Generated template for the CollectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark" class="opacity" hideBackButton>\n\n    <!-- <ion-buttons start>\n              <button ion-button round (click)="openModel()">\n                <img src="user.png">\n                <ion-icon name="contact"></ion-icon>\n              </button>\n            </ion-buttons> -->\n\n    <ion-avatar style="padding-left:10px;" (click)="profile(profile)">\n      <img class="avatar" src="user.png">\n    </ion-avatar>\n\n    <ion-title>Your Library</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="setting()">\n                <ion-icon name="settings"></ion-icon>\n              </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="ion-content" fullscreen>\n  <ion-list no-lines>\n\n    <button ion-item full outline class="ion-content">\n      <ion-icon name="musical-notes" item-start></ion-icon>\n      Playlists\n    </button>\n\n    <button ion-item full outline class="ion-content">\n        <ion-icon name="musical-note" item-start></ion-icon>\n        Songs\n      </button>\n\n    <button ion-item full outline class="ion-content">\n          <ion-icon name="disc" item-start></ion-icon>\n          Albums\n        </button>\n\n    <button ion-item full outline class="ion-content">\n            <ion-icon name="headset" item-start></ion-icon>\n            Artists\n          </button>\n\n    <button ion-item full outline class="ion-content">\n              <ion-icon name="radio" item-start></ion-icon>\n              Podcasts\n          </button>\n\n    <ion-item class="ion-content">\n      <ion-label start>Recently Played</ion-label>\n      <!-- <button ion-button clear item-end class="ion-content" (click)="openModel()">Edit</button> -->\n    </ion-item>\n\n    <div class="text2">\n      Music you\'ve listened to will appear here.\n    </div>\n  </ion-list>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar color="dark" class="footer">\n    <ion-buttons class="button" (click)="modalsTapped()">\n      <button ion-button icon-right>\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title class="position" (click)="modalsTapped()">\n      <ion-slides>\n        <ion-slide>\n          <div class="song">\n            Songs -\n            <p class="artist">Artists</p>\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div class="song">\n            Songs2 -\n            <p class="artist">Artists2</p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button ion-left (click)="changeButton()">\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\collection\collection.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_spotifydata_spotifydata__["a" /* SpotifydataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CollectionPage);

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 109:
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

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(107);
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
                    nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
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
    LoginfacePage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    return LoginfacePage;
}());
LoginfacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loginface',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\loginface\loginface.html"*/'<!--\n  Generated template for the LoginfacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark" text-center>\n    <ion-title>LOG IN</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content" text-center>\n\n  <ion-buttons>\n    <button ion-button class="fb" round (click)="loginFB()">\n      LOG IN WITH FACEBOOK\n    </button>\n  </ion-buttons>\n\n  <div class="or">\n    or\n  </div>\n\n\n  <!-- <ion-item>\n      <ion-input type="text" placeholder="Username or email"></ion-input>\n    </ion-item>\n <br>\n  <ion-item>\n    <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item> -->\n\n  <ion-item no-lines class="padding" full outline>\n    <ion-icon name="person" item-start></ion-icon>\n    <ion-input type="text" placeholder="Username or email"></ion-input>\n  </ion-item>\n  <br>\n  <ion-item no-lines class="padding" full outline>\n    <ion-icon name="lock" item-start></ion-icon>\n    <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n\n  <ion-buttons>\n    <button ion-button class="login" round (click)="home()">\n      LOG IN\n    </button>\n  </ion-buttons>\n\n  <div class="forgot">\n    Forgot your password?\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\loginface\loginface.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginfacePage);

//# sourceMappingURL=loginface.js.map

/***/ }),

/***/ 203:
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
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="dark" class="opacity">\n\n    \n    <ion-searchbar placeholder="Search" showCancelButton (ionInput)="search($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="camera()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="ion-content" fullscreen>\n  <span *ngIf="!isFiltered">\n    <img class="picture" src="search.png">\n    <div class="divtext">\n      <p class="text">\n        Search Spotify\n      </p>\n\n      <p class="text2">\n        Find your favorite songs, artists,\n        <br> albums, podcasts, playlists and friends.\n      </p>\n    </div>\n  </span>\n\n\n  <ion-list *ngIf="isFiltered" class="showResult" no-lines>\n\n    <span>\n      <p *ngIf="shown==true" class="result">Top Result</p>\n      <ion-item *ngFor="let pointer of filterSong">\n        <img class="img" src="{{pointer.artist}}.jpg" align="left"> &nbsp; &nbsp; {{pointer.song}} \n        <p>&nbsp; &nbsp; {{pointer.artist}}</p>\n      </ion-item>\n      \n      <p *ngIf="shown==true" class="result">Artists</p>\n      <ion-item *ngFor="let pointer of filterArtist">\n        <ion-avatar item-start>\n          <img src="{{pointer.artist}}.jpg">\n        </ion-avatar> {{pointer.artist}}\n      </ion-item>\n    </span>\n\n    <span *ngIf="shown==false">\n      <img class="picture" src="search.png">\n      <div class="divtext">\n        <p class="text">\n          Search Spotify\n        </p>\n\n        <p class="text2">\n          Find your favorite songs, artists,\n          <br> albums, podcasts, playlists and friends.\n        </p>\n      </div>\n    </span>\n\n  </ion-list>\n\n\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="dark" class="footer">\n    <ion-buttons class="button">\n      <button ion-button icon-right (click)="modalsTapped()">\n        <ion-icon name="arrow-up" class="buttonColor"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="position" (click)="modalsTapped()">\n      <ion-slides>\n        <ion-slide>\n          <div class="song">\n            Songs -\n            <p class="artist">Artists</p>\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div class="song">\n            Songs2 -\n            <p class="artist">Artists2</p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button ion-left (click)="changeButton()">\n        <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'">\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 204:
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
    function SharePage(viewCtrl, socialSharing, navCtrl, navParams, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.socialSharing = socialSharing;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    SharePage.prototype.shareEmail = function () {
        var _this = this;
        this.socialSharing.canShareViaEmail().then(function () {
            _this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
        }).catch(function () {
            console.log('Error');
            var alert = _this.alertCtrl.create({
                title: 'Share fail !',
                message: 'You must login mail on your device',
                buttons: [
                    {
                        text: 'Close',
                        role: 'Close',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            alert.present();
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
        this.viewCtrl.setBackButtonText('');
    };
    return SharePage;
}());
SharePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-share',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\share\share.html"*/'<!--\n  Generated template for the SharePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar color="toolbar">\n      <ion-title class="title">\n        <p class="ptitle">Share</p>\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding class="background">\n    <ion-list no-lines>\n      <button class="background" ion-item full (click)="shareEmail()">\n        <ion-icon class="icon" name="mail" item-start></ion-icon>\n        Email\n      </button>\n      <button class="background" ion-item full (click)="shareTwitter()">\n        <ion-icon class="icon" name="logo-twitter" item-start></ion-icon>\n        Twitter\n      </button>\n      <button class="background" ion-item full (click)="shareFacebook()">\n        <ion-icon class="icon" name="logo-facebook" item-start></ion-icon>\n        Facebook\n      </button>\n    </ion-list>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\share\share.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SharePage);

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 205:
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
        selector: 'page-select',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\select\select.html"*/'<!--\n  Generated template for the SelectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar class="nav" color="dark">\n    <ion-title class="title">\n      <p class="ptitle">Browse</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <br>\n  <div class="topic" style="margin-bottom: 5px;"><b>นอนหลับฝันดี</b></div>\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="sleeptight.png"></ion-img>\n        <ion-card-header class="artist">\n          Sleep Tight\n          <p class="desc2">496,743 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="piano.png"></ion-img>\n        <ion-card-header class="artist">\n          The Piano Bar\n          <p class="desc2">364,804 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="homerong.png"></ion-img>\n        <ion-card-header class="artist">\n          โหมโรง\n          <p class="desc2">1,686 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="sleepmachine.png"></ion-img>\n        <ion-card-header class="artist">\n          The Sleep Machine: Rainforest\n          <p class="desc2">193,508 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="classical.png"></ion-img>\n        <ion-card-header class="artist">\n          Classical Moments in Movies\n          <p class="desc2">93,685 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="88keys.png"></ion-img>\n        <ion-card-header class="artist">\n          88 Keys\n          <p class="desc2">217,414 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="minimalism.png"></ion-img>\n        <ion-card-header class="artist">\n          Minimalism\n          <p class="desc2">79,239 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="ocean.png"></ion-img>\n        <ion-card-header class="artist">\n          Ocean Escapes\n          <p class="desc2">215,930 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="zen.png"></ion-img>\n        <ion-card-header class="artist">\n          Zen | Indie Folk for Focus\n          <p class="desc2">507,915 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="piano100.png"></ion-img>\n        <ion-card-header class="artist">\n          Piano 100: Spotify Picks\n          <p class="desc2">122,336 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="tender.png"></ion-img>\n        <ion-card-header class="artist">\n          Tender\n          <p class="desc2">19,783 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="scroll">\n      <ion-card-content>\n        <ion-img class="scroll" src="peaceful.png"></ion-img>\n        <ion-card-header class="artist">\n          Peaceful Piano\n          <p class="desc2">3,193,201 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-scroll>\n\n  <ion-list no-lines class="ion-content">\n    <button ion-item full outline class="ion-content">\n        <ion-icon name="trending-up" item-start></ion-icon>\n        Charts\n      </button>\n    <button ion-item full outline class="ion-content">\n          <ion-icon name="calendar" item-start></ion-icon>\n          New Releases\n      </button>\n    <button ion-item full outline class="ion-content">\n            <ion-icon c name="radio" item-start></ion-icon>\n            Podcasts\n      </button>\n    <button ion-item full outline class="ion-content">\n              <ion-icon name="ionic" item-start></ion-icon>\n              Discover\n      </button>\n    <button ion-item full outline class="ion-content">\n                <ion-icon name="videocam" item-start></ion-icon>\n                Concerts\n      </button>\n  </ion-list>\n\n  <div class="topic"><b>Genres &amp; Moods </b></div>\n  <button ion-button class="type1">\n      <img class="img" src="pop.png" />\n      <!-- <img class="card-title" src="xylophone.png"/> -->\n      <div class="card-subtitle">Pop</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="thaimu.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Thai Music</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="mood.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Mood</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="chill.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Chill</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="romance.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Romance</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="kpop.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">K-Pop</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="focus.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Focus</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="sleep.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Sleep</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="rock.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Rock</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="party.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Party</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="artists.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Artists</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="trending.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Trending</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="hiphop.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Hip-Hop</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="electronic.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Electronic/Dance</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="decades.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Decades</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="jazz.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Jazz</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="jtracks.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">J-Tracks</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="workout.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Workout</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="travel.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Travel</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="indie.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Indie</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="rb.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">R &amp; B</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="tv.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">TV &amp; Movies</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="run.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <!-- <div class="card-subtitle">Running</div> -->\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="soul.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Soul</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="country.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Country</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="karaoke.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Karaoke</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="latin.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Latin</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="punk.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Punk</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="gaming.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Gaming</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="folk.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Folk &amp; Americana</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="reggae.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Reggae</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="Funk.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Funk</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="dinner.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Dinner</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="metal.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Metal</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="Blues.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Blues</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="kids.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Kids  Family</div>\n    </button>\n\n  <button ion-button class="type1">\n        <img class="img" src="class.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Classical</div>\n    </button>\n\n  <button ion-button class="type2">\n        <img class="img" src="fresh.png" />\n        <!-- <img class="card-title" src="xylophone.png"/> -->\n        <div class="card-subtitle">Fresh Finds</div>\n    </button>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="dark" class="footer">\n    <ion-buttons class="button" (click)="modalsTapped()">\n      <button ion-button icon-right>\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title class="position" (click)="modalsTapped()">\n      <ion-slides>\n        <ion-slide>\n          <div class="song">\n            Songs -\n            <p class="artist">Artists</p>\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div class="song">\n            Songs2 -\n            <p class="artist">Artists2</p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button ion-left (click)="changeButton()">\n            <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\select\select.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SelectPage);

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 206:
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar class="nav" color="dark">\n    <ion-title class="title">\n      <p class="ptitle">Home</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n  <br>\n  <div class="topic"><b>Concerts Near You</b></div>\n  <div class="desc">Upcoming Concerts by Artists You Love</div>\n  <ion-scroll scrollX="true" direction="x">\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="ben21.jpg"></ion-img>\n        <ion-card-header class="artist">\n          Ben Hobbs\n          <p class="desc2">JAM CAFE</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="tw.png"></ion-img>\n        <ion-card-header class="artist">\n          The Rocket Whale\n          <p class="desc2">CHANGCHUI</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="11nov.png"></ion-img>\n        <ion-card-header class="artist">\n          JMSN\n          <p class="desc2">ROCKADEMY</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="17nov.png"></ion-img>\n        <ion-card-header class="artist">\n          Ducktails\n          <p class="desc2">ROCKADEMY</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="21nov.png"></ion-img>\n        <ion-card-header class="artist">\n          Pond\n          <p class="desc2">NAKARIN THEATRE</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="02dec.png"></ion-img>\n        <ion-card-header class="artist">\n          PREP, Telex Telexs\n          <p class="desc2">VOICE SPACE</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="11dec.png"></ion-img>\n        <ion-card-header class="artist">\n          Shawn Mendes\n          <p class="desc2">IMPACT ARENA, MUANG THONG THANI</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="14dec.png"></ion-img>\n        <ion-card-header class="artist">\n          Wonderfruit Festival 2017\n          <p class="desc2">THE FIELDS AT SIAM COUNTRY CLUB, PATTAYA</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="01jan.png"></ion-img>\n        <ion-card-header class="artist">\n          DJ ARGY\n          <p class="desc2">IMPACT ARENA, MUANG THONG THANI</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n  </ion-scroll>\n\n  <br>\n\n  <div class="topic"><b>Recently Played</b></div>\n  <ion-scroll scrollX="true" direction="x">\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="mint.png"></ion-img>\n        <ion-card-header class="artist">\n          mint\n          <p class="desc2">Playlist • by Spotify</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="thaihit.png"></ion-img>\n        <ion-card-header class="artist">\n          เพลงฮิตประเทศไทย\n          <p class="desc2">Playlist • by Spotify</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="thaiyod.png"></ion-img>\n        <ion-card-header class="artist">\n          เพลงไทยยอดนิยม\n          <p class="desc2">Playlist • by Spotify</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="thaitop.png"></ion-img>\n        <ion-card-header class="artist">\n          Thailand Top 50\n          <p class="desc2">Playlist • by spotifycharts</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n  </ion-scroll>\n\n  <br>\n  <div class="topic"><b>Popular Playlists</b></div>\n  <ion-scroll scrollX="true" direction="x">\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="thaiyod.png"></ion-img>\n        <ion-card-header class="artist">\n          เพลงไทยยอดนิยม\n          <p class="desc2">15,710 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="thaihit.png"></ion-img>\n        <ion-card-header class="artist">\n          เพลงฮิตประเทศไทย\n          <p class="desc2">12,037 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="newmusic.png"></ion-img>\n        <ion-card-header class="artist">\n          New Music Friday Thailand\n          <p class="desc2">4,058 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="mint.png"></ion-img>\n        <ion-card-header class="artist">\n          mint\n          <p class="desc2">4,530,875 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="vivalatino.png"></ion-img>\n        <ion-card-header class="artist">\n          Viva Latino-Top 50\n          <p class="desc2">6,168,761 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="anime.png"></ion-img>\n        <ion-card-header class="artist">\n          アニメ&amp;ANIME!\n          <p class="desc2"> 35,671 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="jrock.png"></ion-img>\n        <ion-card-header class="artist">\n          J-Rock Now\n          <p class="desc2"> 39,247 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="rockanthems.png"></ion-img>\n        <ion-card-header class="artist">\n          Rock Anthems Japan\n          <p class="desc2"> 13,110 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="dream.png"></ion-img>\n        <ion-card-header class="artist">\n          This is: DREAMS COME TRUE\n          <p class="desc2"> 11,025 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-scroll>\n  <br>\n\n  <div class="topic"><b>Charts</b></div>\n  <ion-scroll scrollX="true" direction="x">\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="globaltop.png"></ion-img>\n        <ion-card-header class="artist">\n          Global Top 50\n          <p class="desc2">10,462,457 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="thaitop.png"></ion-img>\n        <ion-card-header class="artist">\n          Thailand Top 50\n          <p class="desc2"> 7,853 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-img src="thaiviral.png"></ion-img>\n        <ion-card-header class="artist">\n          Thailand Viral 50\n          <p class="desc2"> 2,616 FOLLOWERS</p>\n        </ion-card-header>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-scroll>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="dark" class="footer">\n    <ion-buttons class="button" (click)="modalsTapped()">\n      <button ion-button icon-right>\n        <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="position" (click)="modalsTapped()">\n      <ion-slides>\n        <ion-slide>\n          <div class="song">\n            Songs -\n            <p class="artist">Artists</p>\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div class="song">\n            Songs2 -\n            <p class="artist">Artists2</p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button ion-left (click)="changeButton()">\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_playback_playback__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_song_modals_song__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
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
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\setting\setting.html"*/'<!--\n  Generated template for the CollectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark" class="opacity">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="ion-content" fullscreen text-center>\n  <ion-list no-lines>\n\n    <button ion-item full outline class="ion-content">\n      Account\n    </button>\n    <p></p>\n    <button ion-item full outline class="ion-content" (click)="playback()">\n      Playback\n    </button>\n    <p></p>\n    <button ion-item full outline class="ion-content">\n      Devices\n    </button>\n    <p></p>\n    <button ion-item full outline class="ion-content">\n       Social\n    </button>\n    <p></p>\n    <button ion-item full outline class="ion-content">\n      Music Quality\n    </button>\n    <p></p>\n    <button ion-item full outline class="ion-content">\n        Notifications\n    </button>\n    <p></p>\n    <button ion-item full outline class="ion-content">\n        About\n      </button>\n    <p></p>\n    <button ion-button class="buttonLogout" round (click)="presentConfirm()">\n        LOG OUT\n      </button>\n\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="dark" class="footer">\n    <ion-buttons class="button" (click)="modalsTapped()">\n      <button ion-button icon-right>\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title class="position" (click)="modalsTapped()">\n      <ion-slides>\n        <ion-slide>\n          <div class="song">\n            Songs -\n            <p class="artist">Artists</p>\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div class="song">\n            Songs2 -\n            <p class="artist">Artists2</p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button ion-left (click)="changeButton()">\n            <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 208:
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
        selector: 'page-playback',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\playback\playback.html"*/'<!--\n  Generated template for the PlaybackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="dark" class="opacity">\n        <ion-title>Playback</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="ion-content" fullscreen>\n\n    <ion-list no-lines>\n\n\n        <button ion-item full outline class="listtext">\n        Equaliser\n    </button>\n\n        <ion-item class="listtext">\n            <ion-label>Offline</ion-label>\n            <ion-toggle color="secondary"></ion-toggle>\n        </ion-item>\n\n        <div class="text">\n            When you go offline, you\'ll only be able to play the music and podcasts you\'ve downloaded.\n        </div>\n        <br><br>\n\n        <div text-center class="text2">\n            Crossfade\n        </div>\n\n        <ion-item class="ion-content">\n            <ion-range min="0" max="12" pin="true" color="secondary">\n                <label range-left small>0s</label>\n                <label range-right small>12s</label>\n            </ion-range>\n        </ion-item>\n\n\n        <ion-item class="ion-content">\n            <ion-label>Gapless Playback</ion-label>\n            <ion-toggle [(ngModel)]="data.gap" color="secondary"></ion-toggle>\n        </ion-item>\n\n        <ion-item class="listtext">\n            <ion-label>Hide Unplayable Songs</ion-label>\n            <ion-toggle [(ngModel)]="data.hide" color="secondary"></ion-toggle>\n        </ion-item>\n\n        <ion-item class="listtext">\n            <ion-label>Enable Audio Normalisation</ion-label>\n            <ion-toggle [(ngModel)]="data.enable" color="secondary"></ion-toggle>\n        </ion-item>\n\n        <ion-item class="listtext">\n            <ion-label>Play Feedback Sounds</ion-label>\n            <ion-toggle [(ngModel)]="data.play" color="secondary"></ion-toggle>\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="dark" class="footer">\n      <ion-buttons class="button" (click)="modalsTapped()">\n        <button ion-button icon-right>\n            <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n          </button>\n      </ion-buttons>\n  \n      <ion-title class="position" (click)="modalsTapped()">\n        <ion-slides>\n          <ion-slide>\n            <div class="song">\n              Songs -\n              <p class="artist">Artists</p>\n            </div>\n          </ion-slide>\n          <ion-slide>\n            <div class="song">\n              Songs2 -\n              <p class="artist">Artists2</p>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button ion-left (click)="changeButton()">\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\playback\playback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PlaybackPage);

//# sourceMappingURL=playback.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsSongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_share__ = __webpack_require__(204);
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
    function ModalsSongPage(alertCtrl, socialSharing, nativeAudio, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.nativeAudio = nativeAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startSong = 0.00;
        this.slideData = [
            { image: "blaze.png" },
            { image: "RollingIntheDeep.jpg" },
            { image: "SetFiretotheRain.jpeg" }
        ];
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
    ModalsSongPage.prototype.playAudio = function () {
        this.nativeAudio.play('audio2', function () { return console.log('audio2 is done playing'); });
    };
    ModalsSongPage.prototype.stopAudio = function () {
        this.nativeAudio.stop('audio2'), function () { return console.log('audio2 is done stopped'); };
    };
    ModalsSongPage.prototype.sharePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__share_share__["a" /* SharePage */]);
    };
    ModalsSongPage.prototype.changeShuffle = function () {
        this.shuffle = !this.shuffle;
    };
    ModalsSongPage.prototype.closeTapped = function () {
        this.navCtrl.pop();
    };
    return ModalsSongPage;
}());
ModalsSongPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modals-song',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\modals-song\modals-song.html"*/'<ion-header no-border class="black">\n  <ion-toolbar color="toolbar">\n    <ion-buttons (click)="closeTapped()">\n      <button ion-button icon-right>\n        <ion-icon class="color" name="arrow-down"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="closeTapped()">\n      <button ion-button icon-left>\n        <ion-icon class="color" name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div class="artist">Playing music from\n      <p class="artist">The Blaze</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n<div class="slide">\n  <ion-slides>\n<ion-slide *ngFor = "let slide of slideData">\n  <img src="{{slide.image}}">\n</ion-slide>\n  </ion-slides>\n</div>\n  \n  <div class="div">\n    <ion-icon class="add" name="add"></ion-icon>\n    <div class="song">\n      <p class="p1">Territory</p>\n      <p class="p2">The Blaze</p>\n    </div>\n    <ion-icon class="share-alt" name="share-alt" (click)="sharePage()"></ion-icon>\n  </div>\n  <ion-item class="item" no-lines>\n    <ion-range [(ngModel)]="startSong" min="0.00" max="4.00">\n      <ion-label range-left>0:00</ion-label>\n      <ion-label range-right>4:00</ion-label>\n    </ion-range>\n  </ion-item>\n  <div class="div1">\n    <ion-icon [ngClass]="{shuffle:shuffle==true}" class="notShuffle" name="shuffle" (click)="changeShuffle()" ></ion-icon>\n    <ion-icon class="backward" name="skip-backward"></ion-icon>\n    <ion-icon class="play"  (click)="changeButton()" [name]="status? \'pause\':\'play\'"></ion-icon>\n    <ion-icon class="forward" name="skip-forward"></ion-icon>\n    <ion-icon [ngClass]="{repeat:repeat==true}" class="notRepeat" name="repeat"  (click)="changeRepeat()"></ion-icon>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\modals-song\modals-song.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ModalsSongPage);

//# sourceMappingURL=modals-song.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spotifydata_spotifydata__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_collection_collection__ = __webpack_require__(108);
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
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar hideBackButton>\n\n    <ion-icon name="arrow-back" class="backIcon" color="light" (click)="back()"></ion-icon>\n\n      <img class="image" src="user.png">\n    \n    <div class="textName">\n      <!-- {{user.name}} -->\n    </div>\n  <div text-center>\n    <button class=" buttonFriend" ion-button round small (click)="findfriends()"> \n            <div class="textFriend">\n               FIND FRIENDS \n              </div>\n        </button>\n  </div>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content  class="ion-content" fullscreen>\n  <!-- <img src ={{ImageUrl}} class="picture">\n  <div class="text">\n    Mr.Spotify the Jook Slayer\n  </div>\n  <button ion-button color="light" round small class="button">\n      Find friends\n  </button> -->\n\n\n  <div class="playList1" (tap)="tapEvent1($event)">\n    {{tap1}}\n  </div>\n  <div class="follower1" (tap)="tapEvent2($event)">\n    {{tap2}}\n  </div>\n  <div class="following1" (tap)="tapEvent3($event)">\n    {{tap3}}\n  </div>\n\n\n  <div class="playList2">\n    PLAYLISTS\n  </div>\n\n  <div class="follower2">\n    FOLLOWERS\n  </div>\n\n  <div class="following2">\n    FOLLOWING\n  </div>\n\n\n  <div class="textActivity">\n    No recent activity.\n  </div>\n  <div class="textListen">\n    Check out some new music now\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="dark" class="footer">\n    <ion-buttons class="button" (click)="modalsTapped()">\n      <button ion-button icon-right>\n          <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title class="position" (click)="modalsTapped()">\n      <ion-slides>\n        <ion-slide>\n          <div class="song">\n            Songs -\n            <p class="artist">Artists</p>\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <div class="song">\n            Songs2 -\n            <p class="artist">Artists2</p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button ion-left (click)="changeButton()">\n            <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\profile\profile.html"*/,
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
        selector: 'page-findfriends',template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\findfriends\findfriends.html"*/'<!--\n  Generated template for the FindfriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="toolbar">\n        <ion-title>Find Friends</ion-title>\n    </ion-navbar>\n    <ion-toolbar mode="md" color="dark">\n        <ion-segment mode="md" [(ngModel)]="selectedTab" color="secondary">\n            <ion-segment-button value="friend">\n                <div class="text">FRIENDS</div>\n            </ion-segment-button>\n            <ion-segment-button value="featured">\n                <div class="text">FEATURED</div>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content text-center class="ion-content" fullscreen>\n    <span *ngIf="selectedTab==\'friend\'">\n        <button class=" buttonFriend" ion-button round medium (click)="follow(amountFriend)">\n            <div class="textFriend">\n                FOLLOW ALL ({{amountFriend}})\n            </div>\n        </button>\n        <ion-searchbar placeholder="Filter" showCancelButton (ionInput)="searchFriend($event)"></ion-searchbar>\n\n        <ion-list *ngIf="!isFiltered" no-lines>\n            <ion-item *ngFor="let pointer of friendLists">\n                <ion-avatar item-start>\n                    <img src="{{pointer.image}}.jpg">\n                </ion-avatar> {{pointer.name}}\n            </ion-item>\n        </ion-list>\n\n        <ion-list *ngIf="isFiltered" no-lines>\n            <ion-item *ngFor="let pointer of filterFriend">\n                <ion-avatar item-start>\n                    <img src="{{pointer.image}}.jpg">\n                </ion-avatar> {{pointer.name}}\n            </ion-item>\n        </ion-list>\n    </span>\n\n    <span *ngIf="selectedTab==\'featured\'">\n\n        <ion-list no-lines>\n            <ion-item *ngFor="let pointer of featuredLists">\n                <ion-avatar item-start>\n                    <img src="{{pointer.image}}.jpg">\n                </ion-avatar> {{pointer.name}}\n            </ion-item>\n        </ion-list>\n\n    </span>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="dark" class="footer">\n      <ion-buttons class="button" (click)="modalsTapped()">\n        <button ion-button icon-right>\n            <ion-icon  name="arrow-up" class="buttonColor"></ion-icon>\n          </button>\n      </ion-buttons>\n  \n      <ion-title class="position" (click)="modalsTapped()">\n        <ion-slides>\n          <ion-slide>\n            <div class="song">\n              Songs -\n              <p class="artist">Artists</p>\n            </div>\n          </ion-slide>\n          <ion-slide>\n            <div class="song">\n              Songs2 -\n              <p class="artist">Artists2</p>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button ion-left (click)="changeButton()">\n              <img class="imgicon" [src]="status? \'pause-button.png\':\'play-button.png\'"> \n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\pages\findfriends\findfriends.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_select_select__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_collection_collection__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_spotifydata_spotifydata__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_findfriends_findfriends__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_playback_playback__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_audio__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_loginface_loginface__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_share_share__ = __webpack_require__(204);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(107);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngAfterViewInit = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\app\app.html"*/'<ion-nav #myNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Guy\Desktop\hybrid\ionic_spotify\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map