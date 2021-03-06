import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Media, SubCategory} from '../../model/entities/interfaces';
// import {SubCategory} from '../../model/entities/subCategory';
import {Observable}     from 'rxjs/Observable';
import {SafeHttp, NetworkService} from '../network-service/network-service';

import {Storage, SqlStorage} from 'ionic-angular';
import {SQLite, Network, Connection} from 'ionic-native';

/*
  Generated class for the MediaService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediaService {
  subCategoryList: SubCategory[];
  mediaList: Media[];

  public database: SQLite;
  public storage: Storage;

  private mediaServiceUrl = 'http://riversoflife.ca/MediaServiceAPI/m?u=Admin&p=c@l!f0rni@&id=';
  private subCategoryServiceUrl = 'http://riversoflife.ca/MediaServiceAPI/sc?u=Admin&p=c@l!f0rni@&id=';
  private scmServiceUrl = 'http://riversoflife.ca/MediaServiceAPI/scm?u=Admin&p=c@l!f0rni@&id=';
  private allScmServiceUrl = 'http://riversoflife.ca/MediaServiceAPI/allscm?u=Admin&p=c@l!f0rni@';

  constructor(private safeHttp: SafeHttp) {
    this.subCategoryList = null;
    this.mediaList = null;

    if (this.storage == null) {
      this.openDB();
    }
    // this.storage.remove("isInitialized");
    this.buildDbSQL(false);
  }
  getScmList(mainCategoryId) {
    if (this.subCategoryList) {
      // already loaded data
      return Promise.resolve(this.subCategoryList);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.safeHttp.get(this.scmServiceUrl + mainCategoryId)
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
      this.safeHttp.get(this.subCategoryServiceUrl + mainCategoryId)
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
      this.safeHttp.get(this.mediaServiceUrl + subCategoryId)
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


  getAllScmList() {
    if (this.subCategoryList) {
      // already loaded data
      return Promise.resolve(this.subCategoryList);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.safeHttp.get(this.allScmServiceUrl)
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

  openDB() {
    let options = {
      name: "rolAppData.db",
      backupFlag: SqlStorage.BACKUP_LOCAL,
      existingDatabase: true
    }

    // Using SQLite
    this.storage = new Storage(SqlStorage, options);
    return this.storage;
  }


  buildDbSQL(reset) {

    if (reset) {
      this.storage.clear();
      this.storage.query(`DROP TABLE SubCategory`);
      this.storage.query(`DROP TABLE Media`);
    }

    this.storage.get("isInitialized").then(
      (initialized) => {
        if (Network.connection != Connection.NONE && !initialized) {
        // if (!initialized) {
          return this.storage.query(`CREATE TABLE IF NOT EXISTS SubCategory(
      Id INT PRIMARY KEY,
      Name varchar(255),
      Description varchar(255),
      MainCategoryId INT,
      PlayListId INT,
      RowNum INT
     )`).then((data) => {
              console.log("TABLE CREATED: ", data);
            }, (error) => {

              console.error("Unable to execute sql", JSON.stringify(error, null, 2));
            }).then(() => {
              return this.storage.query(`CREATE TABLE IF NOT EXISTS Media(
      Id INT PRIMARY KEY,
      Author varchar(255),
      Title varchar(255),
      Description varchar(255),
      Location varchar(255),
      MediaDate date,
      UploadDate date,
      Active INT,
      SubCategoryId INT,
      Downloaded INT
     )`).then((data) => {
                  console.log("TABLE CREATED: ", data);
                }, (error) => {
                  console.error("Unable to execute sql", JSON.stringify(error, null, 2));
                })
            }, (error) => {
              console.error("Unable to open database", JSON.stringify(error, null, 2));
            }).then(() => {
              this.getAllScmList().then(
                subCategoryList => {
                  console.log("inserting data into database");
                  this.insertMediaData(subCategoryList);
                  return subCategoryList;
                });
            }).then(
            (subCategoryList) => {
              this.storage.set("isInitialized", true);
              return subCategoryList;
            }
            );
        }
      }
    );



  }

  insertMediaData = (scmList) => {
    let subCategoryQuery = "INSERT OR REPLACE INTO SubCategory VALUES (?, ?, ?, ?, ?,?)";
    let mediaQuery = "INSERT OR REPLACE INTO Media VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    for (let sc of scmList) {
      // this.database.executeSql(subCategoryQuery,
      this.storage.query(subCategoryQuery,
        [sc.Id,
          sc.Name,
          sc.Description,
          sc.MainCategoryId,
          sc.PlayListId,
          sc.RowNum]
      ).then((data) => {
        // console.log("INSERTED: " + JSON.stringify(data));
      }, (error) => {
        // console.log("ERROR: " + JSON.stringify(error.err));
        console.log("ERROR in Inserting data into SubCategory: " + JSON.stringify(error, null, 2));
      });
      for (let media of sc.Medias) {
        // this.database.executeSql(mediaQuery, [
        this.storage.query(mediaQuery, [
          media.Id,
          media.Author,
          media.Title,
          media.Description,
          media.Location,
          media.MediaDate,
          media.UploadDate,
          media.Active,
          media.SubCategoryId,
          0
        ]).then((data) => {
          // console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
          // console.log("ERROR: " + JSON.stringify(error.err));
          console.log("ERROR in inserting data into Media: " + JSON.stringify(error, null, 2));
        });
      }
    }
    return scmList;
  }


  getLocalSCData(mainCategoryId) {
    return this.storage.query(`select distinct SubCategory.Id,SubCategory.Name,SubCategory.Description,SubCategory.MainCategoryId,SubCategory.PlayListId, SubCategory.RowNum 
    from SubCategory ,
    (select distinct SubCategoryId from Media order by Media.MediaDate desc) as Media 
    WHERE SubCategory.Id = Media.SubCategoryId  and MainCategoryId = ? order by RowNum`, [mainCategoryId]).then(
      (data) => {
        if (data.res.rows.length > 0) {
          this.subCategoryList = [];
          for (var i = 0; i < data.res.rows.length; i++) {
            this.subCategoryList.push({
              Id: data.res.rows.item(i).Id,
              Name: data.res.rows.item(i).Name,
              Description: data.res.rows.item(i).Description,
              MainCategoryId: data.res.rows.item(i).MainCategoryId,
              PlayListId: data.res.rows.item(i).PlayListId,
              RowNum: data.res.rows.item(i).RowNum
            });

          }
        }
        return this.subCategoryList;
      });
  }

  getLocalMediaData(subCategoryId) {
    // return this.database.executeSql("SELECT * from Media WHERE Media.SubCategoryId = ?", [subCategoryId]).then(
    return this.storage.query("SELECT * from Media WHERE Media.SubCategoryId = ?", [subCategoryId]).then(
      (data) => {
        if (data.res.rows.length > 0) {
          this.mediaList = [];
          for (var i = 0; i < data.res.rows.length; i++) {
            this.mediaList.push({
              Id: data.res.rows.item(i).Id,
              Author: data.res.rows.item(i).Author,
              Title: data.res.rows.item(i).Title,
              Description: data.res.rows.item(i).Description,
              Location: data.res.rows.item(i).Location,
              MediaDate: data.res.rows.item(i).MediaDate,
              UploadDate: data.res.rows.item(i).UploadDate,
              Active: data.res.rows.item(i).Active,
              SubCategoryId: data.res.rows.item(i).SubCategoryId,
              Downloaded: data.res.rows.item(i).Downloaded
            });
          }
        }
        return this.mediaList;
        // this.mediaList = <Media[]> data.res.rows;
        // return this.mediaList;
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

