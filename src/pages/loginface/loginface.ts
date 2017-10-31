import { Component } from '@angular/core';
import { ViewController,NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loginface',
  templateUrl: 'loginface.html',
})
export class LoginfacePage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginfacePage');
    this.viewCtrl.setBackButtonText('');
  }

}
