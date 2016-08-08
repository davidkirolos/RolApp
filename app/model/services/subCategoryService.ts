/*
 *    Project:	RolNG - RolNG
 *    Version:	1.0.0
 *    Date:		21-Apr-2016 3:55:41 PM
 *    Author:	DaviD 
 *
 *    Coded with Netbeans!
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {SubCategory} from '../entities/subCategory';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SubCategoryService {

    private subCategoryUrl = 'http://riversoflife.ca/MediaServiceAPI/sc?u=Admin&p=c@l!f0rni@&id=';

    constructor(private http: Http) { }

    getSubCategoryList(mainCategoryId): Observable<SubCategory[]> {
        return this.http.get(this.subCategoryUrl + mainCategoryId)
            .map(this.extractData)
            .catch(this.handleError);
        //return this.http.get('http://riversoflife.ca/MediaServiceAPI/sc?id=' + mainCategoryId + '&u=Admin&p=c@l!f0rni@');
        // .map((res: Response) => <SubCategory[]> res.json());
        // .toPromise()
        // .then(res => <SubCategory[]> res.json())
        // .then(data => { return data; });
    }

    private extractData(res: Response) {
        let body = res.json();
        // return body.data || {};
        return body || {};
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