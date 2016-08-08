import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Alert,AlertController, Loading,LoadingController,Content} from 'ionic-angular';
import {Media} from '../../model/entities/media'
import {SubCategory} from '../../model/entities/subCategory';
import {MediaService} from '../../providers/media-service/media-service';
import {MediaPlayer} from '../../components/media-player/media-player';
import 'rxjs/Rx';

declare var jwplayer: any;

@Component({
  templateUrl: 'build/pages/mediaList/mediaList.html',
  providers: [MediaService],
  directives: [MediaPlayer]
})
export class MediaListPage {

 @ViewChild(Content) content: Content;

  inParams: any;

  mediaList: Media[];
  subCategoryList: SubCategory[];
  mainCategoryId: string;
  subCategoryId: string;

  constructor(private navController: NavController, navParams: NavParams, private mediaService: MediaService, private alertController: AlertController, private loadingController: LoadingController) {
    this.inParams = navParams.data;
    this.subCategoryId = this.inParams.subCategoryId;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadMediaList().then(data =>
        this.loadMedia(this.mediaList[0], false));

      // this.loadMedia("http://download.riversoflife.ca/riversoflife/video_miracles/video_miracles_2016/miracle_45and.mp4");
    }, 350);
  }

  loadMedia(media, isAutoPlay) {
    var playerInstance = jwplayer("myMediaDiv");
    // "http://download.riversoflife.ca/riversoflife/video_weekly_sermons/a3mal_alrosol_video/gh_24072016and.mp4";
    // "http://riversoflife.flashsvr.com:1935/riversoflife/_definst_/riversoflife/video_weekly_sermons/a3mal_alrosol_video/gh_24072016and.mp4/playlist.m3u8";

    Promise.resolve(playerInstance).then(
      playerInstance => {
        // console.log(media.Location.endsWith(".mp3"));
        
        return playerInstance.setup({
          title: media.Title,
          mediaid: media.Id,
          file:  media.Location ,
          // file: media.Location.endsWith(".mp3") == true ? media.Location  : media.Location.replace("http://download.riversoflife.ca/riversoflife","http://riversoflife.flashsvr.com:1935/riversoflife/_definst_/riversoflife") + "/playlist.m3u8",
          width: "100%",
          height:  media.Location.endsWith(".mp3") == true ? "150px"  : "",
          aspectratio: media.Location.endsWith(".mp3") == true ? ""  : "16:9",
          image: media.Location.endsWith(".mp3") == true ? "http://riversoflife.ca/favicon.png"  : "",
          description: media.Description,
          hlshtml: true,
          logo: {
            hide: true
          }
        });
      }
    )
      .then(
      playerInstance => {
        if (isAutoPlay) {
          return playerInstance.play();
        }
      }
      )
      .then(
      result => {
        this.smoothscroll();
      }
      );
  }

  endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };

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
