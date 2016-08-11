import { Injectable } from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

declare var jwplayer: any;


/*
  Generated class for the MediaService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediaPlayerService {

  constructor() {
  }


  loadMedia(media, isAutoPlay) {
    // var playerInstance = jwplayer("myMediaDiv");
    // "http://download.riversoflife.ca/riversoflife/video_weekly_sermons/a3mal_alrosol_video/gh_24072016and.mp4";
    // "http://riversoflife.flashsvr.com:1935/riversoflife/_definst_/riversoflife/video_weekly_sermons/a3mal_alrosol_video/gh_24072016and.mp4/playlist.m3u8";

    // return Promise.resolve(playerInstance).then(
      return Promise.resolve(jwplayer("myMediaDiv")).then(
      playerInstance => {
        // console.log(media.Location.endsWith(".mp3"));

        return playerInstance.setup({
          title: media.Title,
          mediaid: media.Id,
          file: media.Location,
          // file: media.Location.endsWith(".mp3") == true ? media.Location  : media.Location.replace("http://download.riversoflife.ca/riversoflife","http://riversoflife.flashsvr.com:1935/riversoflife/_definst_/riversoflife") + "/playlist.m3u8",
          width: "100%",
          height: media.Location.endsWith(".mp3") == true ? "150px" : "",
          aspectratio: media.Location.endsWith(".mp3") == true ? "" : "16:9",
          image: media.Location.endsWith(".mp3") == true ? "http://riversoflife.ca/favicon.png" : "",
          description: media.Description,
          hlshtml: true,
          preload: 'metadata',
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
        } else {
          if (!media.Location.endsWith(".mp3")) {
            setTimeout(() => {
              Promise.resolve(playerInstance.play()).then(
                () => {
                  setTimeout(() => {
                    playerInstance.pause();
                    playerInstance.setMute(false);
                    playerInstance.setControls(true);
                  }, 2000);
                });
            }, 500);
          }
        }
      }
      );
  }

  endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}