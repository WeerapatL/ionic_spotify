import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private modalCtrl:ModalController,private statusBar:StatusBar,public navCtrl: NavController, public navParams: NavParams) {
    this.statusBar.styleLightContent()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }

}
