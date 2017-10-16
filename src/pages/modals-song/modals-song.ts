import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalsSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modals-song',
  templateUrl: 'modals-song.html',
})
export class ModalsSongPage {

status:boolean;
statusButton:boolean;
statusRepeat:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  shuffle() {
    this.status = !this.status;
  }
  repeat(){
    this.status = !this.status;
  }
  changeButton() {
    this.status = !this.status;
  }

  closeTapped(){
    this.navCtrl.pop();
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsSongPage');
  }

  
}
