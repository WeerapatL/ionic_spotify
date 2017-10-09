import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';
/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
status:boolean;

  constructor(private modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }

  changeButton(){
    this.status=!this.status;
    console.log(this.status);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

  
}
