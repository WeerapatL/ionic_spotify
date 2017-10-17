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
shuffle:boolean;
repeat:boolean;
startSong:any=0.00;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  changeShuffle(){
    this.shuffle= !this.shuffle;
  }

  changeRepeat(){
    this.repeat= !this.repeat;
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
