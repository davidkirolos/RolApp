import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {MediaPage} from '../media/media';
import {UpcomingPage} from '../upcoming/upcoming';
import {StreamingPage} from '../streaming/streaming';
import {Platform, Nav, Alert, AlertController} from 'ionic-angular';
import {Network, Connection} from 'ionic-native';
import {NoInternetPage} from '../no-internet/no-internet';
import {MyApp} from '../../app';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private deviceType: any;


  constructor(private platform: Platform, private navController: Nav, private alertController: AlertController) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = MediaPage;
    this.tab3Root = UpcomingPage;
    this.tab4Root = StreamingPage;




    // this.database = new SQLite();
    // console.log("opening Database");
    // this.database.openDatabase({ name: "rolAppData.db", location: "default" }).then(() => {

    // console.log("Database opened");
    // console.log("getting data from server");    
    //   this.mediaService.getAllScmList().then(
    //     subCategoryList => {
    //       console.log("inserting data into database");
    //       this.insertMediaData(subCategoryList);
    //       return subCategoryList;
    //     });
    // }, (error) => {
    //   console.log("ERROR From database open: ", error);
    // });

    platform.ready().then(() => {
      this.checkDeviceType();
      if (this.deviceType != "Web") {
        // this.addConnectivityListeners();
      }
    });
  }

  

  addConnectivityListeners() {

    if (Network.connection == Connection.NONE) {
      setTimeout(() => {
        if (Network.connection == Connection.NONE) {
          console.log("You need internet connection to be able to run this application, please connect to internet and try again.");
          let alert = this.alertController.create({
            title: 'Opps!',
            subTitle: "You need internet connection to be able to run this application, please connect to internet and try again.",
            buttons: [{
              text: 'OK',
              role: 'cancel',
              handler: () => {
                this.navController.setRoot(NoInternetPage);
              }
            }]
          });

          alert.present()
          // this.navController.present(NoInternetPage);
          // this.platform.exitApp();

        }
      }, 1000);
    }
    // watch network for a disconnect
    let disconnectSubscription = Network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-( ')
      setTimeout(() => {
        if (Network.connection == Connection.NONE) {
          console.log("You need internet connection to be able to run this application, please connect to internet and try again.");
          let alert = this.alertController.create({
            title: 'Opps!',
            subTitle: "You need internet connection to be able to run this application, please connect to internet and try again.",
            buttons: [{
              text: 'OK',
              role: 'cancel',
              handler: () => {
                this.navController.setRoot(NoInternetPage);
              }
            }]
          });

          alert.present(alert);
          // this.platform.exitApp();

        }
      }, 1000);
    });

    // stop disconnect watch
    // disconnectSubscription.unsubscribe();


    // watch network for a connection
    let connectSubscription = Network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.navController.setRoot(MyApp).then(
        () => this.navController.setRoot(TabsPage)
      );
      // We just got a connection but we need to wait briefly
      // before we determine the connection type.  Might need to wait    
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (Network.connection === Connection.WIFI) {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 1000);
    });

  }

  checkDeviceType() {
    if (this.platform.is('ios')) {
      this.deviceType = "ios";

    } else if (this.platform.is('android')) {
      this.deviceType = "android";
    } else {
      this.deviceType = "Web";
    }
  }

}
