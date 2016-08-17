import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestOptionsArgs } from '@angular/http';
import {Alert, AlertController} from 'ionic-angular';
import {Network, Connection} from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  Generated class for the NetworkService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NetworkService {


  public networkAlert: any;

  constructor(private alertController: AlertController) {
  }

  public noConnection() {
    return (Network.connection === 'none');
  }

  public showNetworkAlert() {
    let networkAlert = this.alertController.create({
      title: 'No Internet Connection',
      message: 'Please check your internet connection.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {}
        },
        {
          text: 'Open Settings',
          handler: () => {
            networkAlert.dismiss().then(() => {
              this.showSettings();
            })
          }
        }
      ]
    });
    networkAlert.present();
  }

  private showSettings() {
    alert("show settings");
    // cordova.plugins.diagnostic.switchToWifiSettings();
    

  }

}

@Injectable()
export class SafeHttp {

  constructor(private http: Http, private networkService: NetworkService) {
  }

  public request(url: string | Request, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else { return this.http.request(url, options) }
  }

  public get(url: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else { return this.http.get(url, options) }
  }

  public post(url: string, body: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else { return this.http.post(url, body, options) }
  }

  public put(url: string, body: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else { return this.http.put(url, body, options) }
  }

  public delete(url: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else { return this.http.delete(url, options) }
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else { return this.http.patch(url, body, options) }
    
  }

  public head(url: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else { return this.http.head(url, options) }
  }

}

