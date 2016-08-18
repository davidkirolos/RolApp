import {Component} from '@angular/core';
import {NavController, Config, Platform} from 'ionic-angular';
// import {MediaPlugin} from 'ionic-native';
import {Media} from '../../model/entities/media'
import {MediaService} from '../../model/services/MediaService';
import {SubcategoryListPage} from '../subcategoryList/subcategoryList';
import {MediaListPage} from '../mediaList/mediaList';

@Component({
  templateUrl: 'build/pages/media/media.html',
  providers: [MediaService]
})
export class MediaPage {
  mediaTabs: any;
  wondersMediaList: Media[];
  currentTrack: any;
  constructor(private platform: Platform,private navController: NavController, private mediaService: MediaService, private config: Config) {
    this.mediaTabs = "1";
  }

  ngOnInit() {
    // this.mediaService.getMediasList('160')
    //   .subscribe(
    //   wondersMediaList => {
    //     this.wondersMediaList = wondersMediaList;
    //     this.currentTrack = this.wondersMediaList[0];
    //     // var file = new MediaPlugin(this.currentTrack.Location);
    //     // file.init.then(() => {
    //     //   console.log('Playback Finished');
    //     // }, (err) => {
    //     //   console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
    //     // });
    //     // // play the file
    //     // file.play();

    //   }
    //   );
  }
  getStyle(){
     if (this.platform.is('android')) {
    return "rgba(21, 21, 21, 0.7)";
    }else{
      return "";
    }
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API    
  }
  gotoSubcategoryList(params) {
    this.config.set('backButtonText', params.mainTitle);
    this.navController.push(SubcategoryListPage, params);
  }
  gotoMediaList(params) {
    this.config.set('backButtonText', params.mainTitle);
    this.navController.push(MediaListPage, params);
  }
}
