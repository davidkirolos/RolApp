// import {Component,ExceptionHandler} from '@angular/core';
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar, BackgroundMode, Network, Connection} from 'ionic-native';
import 'rxjs/Rx';
import {TabsPage} from './pages/tabs/tabs';
import {MediaPlayer} from './components/media-player/media-player';

@Component({
  templateUrl: 'build/app.html',
  directives: [MediaPlayer]
})

export class MyApp {

  private rootPage: any;
  public deviceType: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      StatusBar.styleLightContent();
      // Prevent the app from going to sleep while in background.
      BackgroundMode.enable();
    });
  }
}

ionicBootstrap(MyApp, [], {
  backButtonText: 'الرجوع',
  backButtonIcon: 'arrow-forward',
  iconMode: 'ios',
  tabbarPlacement: 'bottom',
  pageTransition: 'ios',
  tabsPlacement: 'bottom',
});