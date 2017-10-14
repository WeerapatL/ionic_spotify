import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';
import { AlertController } from 'ionic-angular';
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
  
  constructor(public alertCtrl: AlertController,private modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
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

  camera() {
    const alert = this.alertCtrl.create({
      title: '"Spotify" would like to access your camera. You need to enable this in Settings.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Settings',
          handler: () => {
                const alert = this.alertCtrl.create({
                title: 'Couldn'+ '&apos;' +'t Open Link',
                 subTitle: 'The link you tried to open appeared to be a Spotify link, but Spotify was unable to open it.',
                 buttons: ['OK']
    });
    alert.present();
  
          }
        }
      ]
    });
    alert.present();
  }

 



  
}
