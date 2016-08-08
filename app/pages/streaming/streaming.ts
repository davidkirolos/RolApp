import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MediaPlayer} from '../../components/media-player/media-player';
declare var jwplayer: any;

@Component({
  templateUrl: 'build/pages/streaming/streaming.html',
  directives: [MediaPlayer]
})
export class StreamingPage {
   constructor(private navController: NavController) {
  }


  ngOnInit() {
    setTimeout(() => {
          this.loadMedia(null, false);

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
          title: 'البث الحي',
          mediaid: 'live500',
          file:  'http://riversoflife.flashedgesvr.com:1935/riversoflifelive/live500/playlist.m3u8',
          // file: media.Location.endsWith(".mp3") == true ? media.Location  : media.Location.replace("http://download.riversoflife.ca/riversoflife","http://riversoflife.flashsvr.com:1935/riversoflife/_definst_/riversoflife") + "/playlist.m3u8",
          width: "100%",
          aspectratio: "16:9",
          image:  "http://riversoflife.ca/favicon.png",
          description: 'البث الحي جودة مرتفعة',
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
      );
  }

  
}
