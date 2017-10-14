import { Component } from '@angular/core';
import {ViewController, NavController, NavParams } from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
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

}
