import { Component } from '@angular/core';
import { ViewController,AlertController,NavController, NavParams } from 'ionic-angular';
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

  constructor(private viewCtrl: ViewController,private socialSharing:SocialSharing,public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController) {
    
  }

  shareEmail(){
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
    }).catch(() => {
  console.log('Error');

  const alert = this.alertCtrl.create({
    title: 'Share fail !',
    message: 'You must login mail on your device',
    buttons: [
      {
        text: 'Close',
        role: 'Close',
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
    this.viewCtrl.setBackButtonText('');
  }

}
