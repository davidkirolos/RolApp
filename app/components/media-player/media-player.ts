import { Component } from '@angular/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

/*
  Generated class for the MediaPlayer component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/


// declare var jwplayer: any;

@Component({
  selector: 'media-player',
  templateUrl: 'build/components/media-player/media-player.html',
  directives: [IONIC_DIRECTIVES]
})
export class MediaPlayer {

  text: string;

  constructor() {
  }

  ngOnInit() {
    // var playerInstance = jwplayer("myElement");
    // console.log(playerInstance);
    
    // playerInstance.setup({
    //   file: "http://download.riversoflife.ca/riversoflife/video_miracles/video_miracles_2016/miracle_45and.mp4"
    // });

  }
}
