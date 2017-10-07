import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ModalController } from 'ionic-angular';

import { ModalsSongPage } from '../pages/modals-song/modals-song';
import { SearchPage } from '../pages/search/search';
import { SelectPage } from '../pages/select/select';
import { HomePage } from '../pages/home/home';
import { CollectionPage } from '../pages/collection/collection';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    SelectPage,
    HomePage,
    CollectionPage,
    ModalsSongPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    SelectPage,
    HomePage,
    CollectionPage,
    ModalsSongPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
