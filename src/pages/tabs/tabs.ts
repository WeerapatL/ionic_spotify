import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { SelectPage } from '../select/select';
import { HomePage } from '../home/home';
import { CollectionPage } from '../collection/collection';
import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SelectPage;
  tab3Root = SearchPage;
  tab4Root = CollectionPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  // modalsTapped(){
  //   this.navCtrl.push(ModalsSongPage);

  // }
}
