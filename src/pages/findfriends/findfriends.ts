import { Component } from '@angular/core';
import {ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FindfriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-findfriends',
  templateUrl: 'findfriends.html',
})
export class FindfriendsPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindfriendsPage');
    this.viewCtrl.setBackButtonText('');
  }

}
