import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  status:boolean;
  
  constructor(private modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }
  
  changeButton() {
    this.status = !this.status;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  
}
