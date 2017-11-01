import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginfacePage } from '../pages/loginface/loginface';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  // @ViewChild('myNav')nav;

  rootPage:any = TabsPage;

  constructor(platform: Platform,private statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.statusBar.styleLightContent();
      splashScreen.hide();      
    });
  }

  ngAfterViewInit(){
    // this.nav.push(LoginPage);
  }


  
  
}
