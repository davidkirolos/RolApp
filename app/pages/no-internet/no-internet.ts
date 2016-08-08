import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
// import {Network, Connection} from 'ionic-native';
// import {MyApp} from '../../app';

/*
  Generated class for the NoInternetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/no-internet/no-internet.html',
})
export class NoInternetPage {

  constructor(private navController: NavController) {
//  // watch network for a connection
//     let connectSubscription = Network.onConnect().subscribe(() => {
//       console.log('network connected!');
//       this.navController.setRoot(MyApp);
//       // We just got a connection but we need to wait briefly
//       // before we determine the connection type.  Might need to wait    
//       // prior to doing any api requests as well.
//       setTimeout(() => {
//         if (Network.connection === Connection.WIFI) {
//           console.log('we got a wifi connection, woohoo!');
//         }
//       }, 3000);
//     });
  }

}
