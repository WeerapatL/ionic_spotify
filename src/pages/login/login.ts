import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../home/home';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { AlertController } from 'ionic-angular';
import { LoginfacePage } from '../../pages/loginface/loginface';


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

  slides = [
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

  constructor(public alertCtrl: AlertController, public nativeAudio: NativeAudio, private socialSharing: SocialSharing, public nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginface() {
    this.navCtrl.push(LoginfacePage);
  }

  share2(){
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
    }).catch(() => {
  console.log('Error');
    });
  }

  shareEmail(){
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
   
    }).catch(() => {
  console.log('Error');

  const alert = this.alertCtrl.create({
    title: 'Log Out',
    message: 'Are you sure you want to log out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
        
      }
      
    ]
});
  alert.present();
    });
  }



}
