import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Alert,AlertController, Loading,LoadingController,Content} from 'ionic-angular';
import {Media,SubCategory} from '../../model/entities/interfaces';
import {MediaService} from '../../providers/media-service/media-service';
import {MediaPlayer} from '../../components/media-player/media-player';
import {MediaPlayerService} from '../../components/media-player/media-player-service';
import 'rxjs/Rx';

// declare var jwplayer: any;

@Component({
  templateUrl: 'build/pages/mediaList/mediaList.html',
  providers: [MediaService,MediaPlayerService],
  directives: [MediaPlayer]
})
export class MediaListPage {

 @ViewChild(Content) content: Content;

  inParams: any;

  mediaList: Media[];
  subCategoryList: SubCategory[];
  mainCategoryId: string;
  subCategoryId: string;

  constructor(private mediaPlayerService : MediaPlayerService ,private navController: NavController, navParams: NavParams, private mediaService: MediaService, private alertController: AlertController, private loadingController: LoadingController) {
    this.inParams = navParams.data;
    this.subCategoryId = this.inParams.subCategoryId;
  }

  ngOnInit() {
    
  }


  ionViewDidEnter() {
    setTimeout(() => {
      this.loadMediaList().then(data =>
        this.loadMedia(this.mediaList[0], false));
    }, 350);
    
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
    return this.mediaService.getMediasList(this.subCategoryId)
      .then(mediaList => {
        this.mediaList = mediaList
      });
  }


  loadMediaList() {
    let loading = this.loadingController.create({});
    loading.present();
    return this.mediaService.getMediasList(this.subCategoryId)
      .then(
      mediaList => this.mediaList = mediaList,
      error => this.handleError(<any>error))
      .then(() => { loading.dismiss() }
      );
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = error;

    let alert = this.alertController.create({
      title: 'Opps!',
      subTitle: errMsg,
      buttons: ['OK']
    });

    alert.present();

    // console.error(errMsg); // log to console instead
  }


}
