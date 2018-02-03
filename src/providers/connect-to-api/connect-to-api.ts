import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectToApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectToApiProvider {
  baseURL: string = "https://api.themoviedb.org/3";
  apiKey: string = "66ae687f31e3066ab23a1b7128278d17";
  parameterKey: string = "?api_key=" + this.apiKey;


  constructor(public http: HttpClient) {
    console.log('Hello ConnectToApiProvider Provider');
  }

  loadMovieDiscover(page:number = 1) {
    return this.http.get(this.baseURL + "/discover/movie" + this.parameterKey + "&sort_by=popularity.desc&page=" + page);
  }

  getMovieInfo() {

  }

}
