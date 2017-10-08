import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpotifydataProvider } from '../../providers/spotifydata/spotifydata';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  ImageUrl:string='';

  constructor(spotify:SpotifydataProvider,public navCtrl: NavController, public navParams: NavParams) {
   this.ImageUrl = spotify.getImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
