import { Component } from '@angular/core';
import { AlertController,ViewController,IonicPage,NavController, NavParams } from 'ionic-angular';
import { CollectionPage } from '../../pages/collection/collection';
import { HomePage } from '../../pages/home/home'; 
import { PlaybackPage } from '../../pages/playback/playback';

import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';
import {LoginPage} from '../../pages/login/login';


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  status:boolean;

  constructor(private modalCtrl:ModalController,public alertCtrl: AlertController,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.viewCtrl.setBackButtonText('');
  }

  presentConfirm() {
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
          
        },
        {
          text: 'Log out',
          handler: () => {
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

  playback(){
    this.navCtrl.push(PlaybackPage);
  }

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }

  changeButton(){
    this.status=!this.status;
    console.log(this.status);
  }

}
