import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../global";
import { environment } from "../../environments/environment";

@Injectable()
export class ServicePersonas {
    constructor(
        private _http: HttpClient
    ){}

    getPersonas(): Observable<any>{
        let urlApiPersonas = Global.urlApiPersonas+"/api/personas";

        return this._http.get(urlApiPersonas)
    }

    getPersonasPromesa(): Promise<any> {
        let request = '/api/personas';
        // let url = Global.urlApiPersonas + request;
        let url = environment.urlApiPersonas + request;
        let promise = new Promise((resolve) => {
            this._http.get(url).subscribe(response => {
                resolve(response);
            })
        })
        return promise;
    }
}