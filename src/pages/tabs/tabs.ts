import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { SelectPage } from '../select/select';
import { HomePage } from '../home/home';
import { CollectionPage } from '../collection/collection';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SelectPage;
  tab3Root = SearchPage;
  tab4Root = CollectionPage;

  constructor() {

  }
}
