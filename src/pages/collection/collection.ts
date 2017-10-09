import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SettingPage} from '../../pages/setting/setting';
import 'rxjs/add/operator/map' ;
import { Http } from '@angular/http' ;
import { ProfilePage } from '../../pages/profile/profile';
import { SpotifydataProvider } from '../../providers/spotifydata/spotifydata';
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
  ImageUrl : String='';
  status:boolean;

  constructor(private modalCtrl:ModalController,spotify:SpotifydataProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.ImageUrl = spotify.getImage();
  }

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }
  
  changeButton() {
    this.status = !this.status;
  }

  setting(){
    this.navCtrl.push(SettingPage);
  }

  profile(profile){
    this.navCtrl.push(ProfilePage,profile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
  }

}
