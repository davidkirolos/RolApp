import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Media} from '../../model/entities/media';
import {SubCategory} from '../../model/entities/subCategory';
import {Observable}     from 'rxjs/Observable';

/*
  Generated class for the MediaService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediaService {
  subCategoryList: any;
  mediaList: any;

  private mediaServiceUrl = 'http://riversoflife.ca/MediaServiceAPI/m?u=Admin&p=c@l!f0rni@&id=';
  private subCategoryServiceUrl = 'http://riversoflife.ca/MediaServiceAPI/sc?u=Admin&p=c@l!f0rni@&id=';

  constructor(private http: Http) {
    this.subCategoryList = null;
    this.mediaList = null;
  }

  getSubCategoryList(mainCategoryId) {
    if (this.subCategoryList) {
      // already loaded data
      return Promise.resolve(this.subCategoryList);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(this.subCategoryServiceUrl + mainCategoryId)
        .map(res => res.json())
        .catch(this.handleError)
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.subCategoryList = data;
          resolve(this.subCategoryList); 
        });
    });
  }
  getMediasList(subCategoryId) {
    if (this.mediaList) {
      // already loaded data
      return Promise.resolve(this.mediaList);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(this.mediaServiceUrl + subCategoryId)
        .map(res => res.json())
        .catch(this.handleError)
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.mediaList = data;
          resolve(this.mediaList);
        });
    });
  }


  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}

