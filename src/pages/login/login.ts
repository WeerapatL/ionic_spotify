import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../home/home';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  FB_APP_ID: 312414275832004;

  constructor(private socialSharing:SocialSharing,public nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook) {
    this.facebook.browserInit(this.FB_APP_ID);
  }

  loginFB() {
    let permissions = new Array<string>();
    let nav = this.navCtrl;


    permissions = ["public_profile"];

    this.facebook.login(permissions)
      .then((response) => {
        let userId = response.authResponse.userID;
        let params = new Array<string>();

        this.facebook.api("/me?fields=name,gender", params)
          .then((user) => {
            user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            this.nativeStorage.setItem('user',
              {
                name: user.name,
                gender: user.gender,
                picture: user.picture
              })
              .then(() => {
                nav.push(HomePage);
              }, (error) => {
                console.log(error);
              })
          })
      }, (error) => {
        console.log(error);
      });
  }

  share(){
    this.socialSharing.canShareVia('twitter','Hello','ionic','','').then(() => {
      this.socialSharing.shareViaTwitter('Hello Pome','','');
    }).catch(() => {
      console.log('Error');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
