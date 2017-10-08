import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';
/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {

  constructor(private modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
  }

  
}
