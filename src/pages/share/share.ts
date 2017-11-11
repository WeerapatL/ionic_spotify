import { Component } from '@angular/core';
<<<<<<< HEAD
import { ViewController,AlertController,NavController, NavParams } from 'ionic-angular';
=======
import { NavController, NavParams } from 'ionic-angular';
>>>>>>> a3636858b8f5c75a297154ab47e720e78f692e65
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

<<<<<<< HEAD
  constructor(private viewCtrl: ViewController,private socialSharing:SocialSharing,public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController) {
=======
  constructor(private socialSharing:SocialSharing,public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> a3636858b8f5c75a297154ab47e720e78f692e65
    
  }

  shareEmail(){
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
    }).catch(() => {
  console.log('Error');
<<<<<<< HEAD

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
=======
>>>>>>> a3636858b8f5c75a297154ab47e720e78f692e65
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
