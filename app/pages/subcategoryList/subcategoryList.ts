import {Component,ViewChild} from '@angular/core';
import {NavController, NavParams, Loading,LoadingController, Config, Content} from 'ionic-angular';
import {Media,SubCategory} from '../../model/entities/interfaces'
import {MediaListPage} from '../mediaList/mediaList';
import {Observable}     from 'rxjs/Observable';
import {MediaPlayer} from '../../components/media-player/media-player';
import {MediaService} from '../../providers/media-service/media-service';
import {MediaPlayerService} from '../../components/media-player/media-player-service';
import 'rxjs/Rx';

@Component({
  templateUrl: 'build/pages/subcategoryList/subcategoryList.html',
  providers: [MediaService,MediaPlayerService],
  directives: [MediaPlayer]
})
export class SubcategoryListPage {
  
 @ViewChild(Content) content: Content;

  inParams: any;

  mediaList: Media[];
  subCategoryList: SubCategory[];
  mainCategoryId: string;

  constructor(private mediaPlayerService: MediaPlayerService, private navController: NavController, navParams: NavParams, private mediaService: MediaService, private config: Config, private loadingController: LoadingController) {
    this.inParams = navParams.data;
    this.mainCategoryId = this.inParams.mainCategoryId;
  }

  ngOnInit() {
    setTimeout(() => {
      // this.loadSubCategories();
    }, 350);
  }
   ionViewDidEnter() {
    setTimeout(() => {
       this.loadSubCategories().then(data =>
        this.loadMedia( (<SubCategory>this.subCategoryList[0]).Medias[0], false));
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

   loadMedia(media, isAutoPlay) {
    this.mediaPlayerService.loadMedia(media,isAutoPlay).then(
      result => {
        this.smoothscroll();
      }
      );
  }

  smoothscroll() {
    this.content.scrollToTop();
  };

  loadSubCategories() {
    let loading = this.loadingController.create({ });

    loading.present();

    return this.mediaService.getScmList(this.mainCategoryId)
      .then(subCategoryList => {
        this.subCategoryList = subCategoryList        
      })
      .then(() => { loading.dismiss()   }
      );
  }

}
