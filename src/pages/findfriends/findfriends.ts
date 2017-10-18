import { Component } from '@angular/core';
import {ViewController, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';

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
  friendLists:Array<any>=[];
  amountFriend:number;
  selectedTab="friend";
  filterFriend: Array<any> = [];
  isFiltered: boolean;
  featuredLists:Array<any>=[];

  constructor(private modalCtrl:ModalController,public alertCtrl: AlertController,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.friendLists=[
      {name:"Alizabeth",image:"Alizabeth"},
      {name:"Bell Laymax",image:"Bell"},
      {name:"Carlon Welv",image:"Carlon"},
      {name:"Debby",image:"Debby"},
      {name:"Frediorie",image:"Frediorie"},
      {name:"George Bruise",image:"George"},
      {name:"Lowson",image:"Lowson"},
      {name:"Monorica",image:"Monorica"},
      {name:"Nolan Hammer",image:"Nolan"},
      {name:"Piyachai Chalermpon",image:"Piyachai"},
      {name:"Sakito Homotaru",image:"Sakito"},
    ];

    this.featuredLists=[
      {name:"Spotify",image:"Spotify"},
      {name:"Coca-Cola",image:"Coke"},
      {name:"Calvin Harris",image:"Calvin"},
      {name:"BCC Tero Music",image:"BCC"},
      {name:"GMM Grammy",image:"Grammy"},
      {name:"RS",image:"RS"},
    ];

    this.amountFriend=this.friendLists.length;
  }

  searchFriend(event) {
    if (event.target.value) {
      if (event.target.value.length > 0) {
        let filterJson = this.friendLists.filter(row => {
          if (row.name.indexOf(event.target.value) != -1) {
            return true;
          } else {
            return false;
          }
        }
        );
        this.isFiltered = true;
        this.filterFriend = filterJson;
      } else {
        this.isFiltered = false;
      }
    } else {
      this.isFiltered = false;
    }
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindfriendsPage');
    this.viewCtrl.setBackButtonText('');
  }

  follow(amountFriend) {
    const alert = this.alertCtrl.create({
      title: 'Find Friends',
      message: 'Are you sure you want to follow all '+amountFriend+' of your friends?',
      buttons: [
        {
          text: 'Follow all '+amountFriend+' friends',
          role: 'follow',
          handler: () => {
            console.log('follow clicked');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }

  changeButton(){
    this.status=!this.status;
    console.log(this.status);
  }
}
