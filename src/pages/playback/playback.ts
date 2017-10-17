import { Component } from '@angular/core';
import {ViewController, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';

/**
 * Generated class for the PlaybackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-playback',
  templateUrl: 'playback.html',
})
export class PlaybackPage {
  status:boolean;

  constructor(private modalCtrl:ModalController,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaybackPage');
    this.viewCtrl.setBackButtonText('');
  }

  data = {
    gap: true,
    hide: true,
    enable: true,
    play: true  
  };

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }

  changeButton(){
    this.status=!this.status;
    console.log(this.status);
  }

}
