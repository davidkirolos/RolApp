import {Component} from '@angular/core';
import {NavController, Config} from 'ionic-angular';
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
  constructor(private navController: NavController, private mediaService: MediaService, private config: Config) {
    this.mediaTabs = "1";
  }

  ngOnInit() {
    this.mediaService.getMediasList('160')
      .subscribe(
      wondersMediaList => {
        this.wondersMediaList = wondersMediaList;
      }
      );
  }

  gotoSubcategoryList(params) {
    this.config.set('backButtonText', params.mainTitle);
    this.navController.push(SubcategoryListPage, params);
  }
  gotoMediaList(params){
      this.config.set('backButtonText', params.mainTitle);
      this.navController.push(MediaListPage, params);
    }
}
