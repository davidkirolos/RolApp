import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams, Loading, LoadingController, Config, Content} from 'ionic-angular';
import {Media, SubCategory} from '../../model/entities/interfaces'
import {MediaListPage} from '../mediaList/mediaList';
import {Observable}     from 'rxjs/Observable';
import {MediaPlayer} from '../../components/media-player/media-player';
import {MediaService} from '../../providers/media-service/media-service';
import {MediaPlayerService} from '../../components/media-player/media-player-service';
import 'rxjs/Rx';
@Component({
  templateUrl: 'build/pages/subcategoryList/subcategoryList.html',
  providers: [MediaPlayerService]
  ,
  directives: [MediaPlayer]
})
export class SubcategoryListPage {

  @ViewChild(Content) content: Content;

  inParams: any;
  activeSC: any;

  mediaList: Media[];
  // mediaList: Array<Object>;
  subCategoryList: SubCategory[];
  // subCategoryList: Array<Object>;
  mainCategoryId: string;

  constructor(private elementRef: ElementRef, private mediaPlayerService: MediaPlayerService, private navController: NavController, navParams: NavParams, private mediaService: MediaService, private config: Config, private loadingController: LoadingController) {
    this.inParams = navParams.data;
    this.mainCategoryId = this.inParams.mainCategoryId;
  }

  showList(subCategory, event) {
    this.mediaService.getLocalMediaData(subCategory.Id).then(
      medias => {
        // if (medias.length > 0) {
          this.mediaList = medias;
          // this.mediaList = [];
          // for (var i = 0; i < medias.length; i++) {
          //   this.mediaList.push({
          //     Id: medias.item(i).Id,
          //     Author: medias.item(i).Author,
          //     Title: medias.item(i).Title,
          //     Description: medias.item(i).Description,
          //     Location: medias.item(i).Location,
          //     MediaDate: medias.item(i).MediaDate,
          //     UploadDate: medias.item(i).UploadDate,
          //     Active: medias.item(i).Active,
          //     SubCategoryId: medias.item(i).SubCategoryId,
          //     Downloaded: medias.item(i).Downloaded
          //   });

          // }
        // }

        // this.mediaList = medias;
        this.activeSC == subCategory.Id ? this.activeSC = 0 : this.activeSC = subCategory.Id;
        // setTimeout(
        //   () => {
            var pos = this.findPos(event.target);
            this.content.scrollTo(pos.left, pos.top - 1, 100);
          // }
          // , 0);
        return this.mediaList;
      }
    );

  }

  findPos(element) {
    if (element.tagName.toUpperCase() != 'H2') {
      element = this.getElementsByTagName(element.parentNode, "h2")[0];
    }

    element = element.parentNode.parentNode.parentNode.parentNode;
    // console.log(element);

    var curleft = 0;
    var curtop = 0;
    do {
      curleft += element.offsetLeft;
      curtop += element.offsetTop;
      // console.log(curtop);
      return {
        left: curleft,
        top: curtop
      };
    } while (element = element.offsetParent)
    return {
      left: curleft,
      top: curtop
    };
  }

  getElementsByTagName(node, tagName) {
    var elements = [], i = 0, anyTag = tagName === "*", next = node.firstChild;
    while ((node = next)) {
      if (anyTag ? node.nodeType === 1 : node.nodeName === tagName.toUpperCase()) elements[i++] = node;
      next = node.firstChild || node.nextSibling;
      while (!next && (node = node.parentNode)) next = node.nextSibling;
    }
    return elements;
  }
  ngOnInit() {
    // setTimeout(() => {
    //   // this.loadSubCategories();
    // }, 350);
  }

  ionViewDidEnter() {
    // setTimeout(() => {
      this.loadSubCategories();
      // .then(data => {
        //this.loadMedia((<SubCategory>this.subCategoryList[0]).Medias[0], false)
      // });
    // }, 0);

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
    this.mediaPlayerService.loadMedia(media, isAutoPlay).then(
      result => {
        this.smoothscroll();
      }
    );
  }

  smoothscroll() {
    this.content.scrollToTop();
  };

  loadSubCategories() {
    let loading = this.loadingController.create({});

    loading.present();

    return this.mediaService.getLocalSCData(this.mainCategoryId)
      .then(subCategoryList => {
        if (subCategoryList.length > 0) {
          this.subCategoryList = subCategoryList;
          return this.subCategoryList;
        }
        // console.log(this.subCategoryList);

        // this.subCategoryList = subCategoryList
      })
      .then(() => { loading.dismiss() }
      );
  }



}
