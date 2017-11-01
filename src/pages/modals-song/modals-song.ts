import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SharePage } from '../share/share';
/**
 * Generated class for the ModalsSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modals-song',
  templateUrl: 'modals-song.html',
})
export class ModalsSongPage {

  status: boolean;
  shuffle: boolean;
  repeat: boolean;
  startSong: any = 0.00;


  constructor(public alertCtrl: AlertController, private socialSharing: SocialSharing, public nativeAudio: NativeAudio, public navCtrl: NavController, public navParams: NavParams) {

  }

  // play(){
  //   this.nativeAudio.preloadComplex('clickSound', 'assets/clickSound.mp3', 1, 1, 0).then(this.onSuccessPreloading, this.onError);
  // }
  // onSuccessPreloading = (data) => {
  //   console.log('success preloading', data);
  //   this.nativeAudio.play('track1').then(this.onSuccessPlaying, this.onError);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsSongPage');
    this.nativeAudio.preloadComplex('audio2', 'clickSound.mp3', 1, 1, 0);
  }

  sharePage(){
    this.navCtrl.push(SharePage);
  }

  playAudio(){
    this.nativeAudio.play('audio2' ,() => console.log('audio2 is done playing'));

    // const alert = this.alertCtrl.create({
    //   title: 'Played',
    //   subTitle: 'Song has played',
    //   buttons: ['OK']
    // });
    // alert.present();
  }

 

  stopAudio(){
    this.nativeAudio.stop('audio2'),() => console.log('audio2 is done stopped');

    // const alert = this.alertCtrl.create({
    //   title: 'Stopped',
    //   subTitle: 'Song has stopped',
    //   buttons: ['OK']
    // });
    // alert.present();

  }

  changeShuffle() {
    this.shuffle = !this.shuffle;
  }

  changeRepeat() {
    this.repeat = !this.repeat;
    if (this.repeat == true) {
      this.nativeAudio.loop('audio2');
    }
  }

  changeButton() {
    this.status = !this.status;
    if (this.status == true) {
      this.nativeAudio.play('audio2', () => console.log('audio2 is done playing'));
    } else {
      this.nativeAudio.stop('audio2'), () => console.log('audio2 is done stopped');
    }
  }

  closeTapped() {
    this.navCtrl.pop();
  }




}
