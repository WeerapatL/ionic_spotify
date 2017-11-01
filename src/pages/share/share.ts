import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(private socialSharing:SocialSharing,public navCtrl: NavController, public navParams: NavParams) {
    
  }

  shareEmail(){
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail('Invite to listen music on Spotify', 'Spotify Sharing', ['weerapat.laor@gmail.com']);
    }).catch(() => {
  console.log('Error');
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
