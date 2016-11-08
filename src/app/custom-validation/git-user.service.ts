import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}
    lookupUser(username: string): Observable<any> {
        return this.http.get("https://api.github.com/users/" + username)
        .map(this.extractData)
        .catch(this.handleError) as Observable<any>;
    };
    handleError(error: any){
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg)    
    }
    extractData<T>(res: Response) {
        let body = res.json();
        return <T>body;
    }
}
export function usernameTaken(httpService: HttpService){
    return control => new Promise((resolve, reject) => {
        console.log("in validator");
        httpService.lookupUser(control.value).subscribe(data => {
            console.log(data);
            if(data.id){
                resolve({ usernameTaken : true})
            } else {
                resolve(null);
            }
        }, (err) => {
            console.log("in error" + err);
           if(err !== "404 - Not Found") {
                resolve({ usernameTaken : true});
            } else {
              resolve(null);
            }
              });
    });
}
