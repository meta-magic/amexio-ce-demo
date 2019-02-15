import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HTTPService {

    constructor(private http: HttpClient){

    }

    fetch(url:string){
        return this.http.get(url);
    }
}