import { Component } from '@angular/core';
import { AlertController,NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor(private socialSharing:SocialSharing,public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController) {
    
  }

  share2(){
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
    }).catch(() => {
  console.log('Error');
    });
  }

  shareEmail(){
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
    }).catch(() => {
  console.log('Error');

  const alert = this.alertCtrl.create({
    title: 'Log Out',
    message: 'Are you sure you want to log out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
        
      }
      
    ]
});
  alert.present();
    });
  }

  shareTwitter(){
    this.socialSharing.shareViaTwitter('ionic test',null,null);
  }

  shareFacebook(){
    this.socialSharing.shareViaFacebook('ionic test',null,null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

}
