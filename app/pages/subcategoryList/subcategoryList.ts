import {Component} from '@angular/core';
import {NavController, NavParams, Loading,LoadingController, Config} from 'ionic-angular';
import {Media} from '../../model/entities/media'
import {SubCategory} from '../../model/entities/subCategory';
// import {MediaService} from '../../model/services/mediaService';
import {MediaListPage} from '../mediaList/mediaList';
import {Observable}     from 'rxjs/Observable';
import {MediaService} from '../../providers/media-service/media-service';

@Component({
  templateUrl: 'build/pages/subcategoryList/subcategoryList.html',
  providers: [MediaService]
})
export class SubcategoryListPage {
  inParams: any;

  mediaList: Media[];
  subCategoryList: SubCategory[];
  mainCategoryId: string;

  constructor(private navController: NavController, navParams: NavParams, private mediaService: MediaService, private config: Config, private loadingController: LoadingController) {
    this.inParams = navParams.data;
    this.mainCategoryId = this.inParams.mainCategoryId;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadSubCategories();
    }, 350);
  }

  gotoMediaList(params) {
    this.config.set('backButtonText', params.mainTitle);
    this.navController.push(MediaListPage, params);
  }


  doRefresh(refresher) {
    this.refresh().then(
      (success) => {
        setTimeout(() => {
          refresher.complete();
        }, 1000)
      },
      (error) => {
        setTimeout(() => {
          refresher.complete();
        }, 1000)
      }
    );
  }

  refresh() {
    return this.mediaService.getSubCategoryList(this.mainCategoryId)
      .then(subCategoryList => {
        this.subCategoryList = subCategoryList
      });
  }

  loadSubCategories() {
    let loading = this.loadingController.create({ });

    loading.present();

    this.mediaService.getSubCategoryList(this.mainCategoryId)
      .then(subCategoryList => {
        this.subCategoryList = subCategoryList
      })
      .then(() => { loading.dismiss()   }
      );
  }

}
