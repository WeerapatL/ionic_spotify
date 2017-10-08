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
import { SettingPage } from '../pages/setting/setting';
import { ProfilePage} from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpotifydataProvider } from '../providers/spotifydata/spotifydata';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    SelectPage,
    HomePage,
    CollectionPage,
    ModalsSongPage,
    TabsPage,
    SettingPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    SelectPage,
    HomePage,
    CollectionPage,
    ModalsSongPage,
    TabsPage,
    SettingPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpotifydataProvider
  ]
})
export class AppModule {}
