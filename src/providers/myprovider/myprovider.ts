import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite'
/*
  Generated class for the MyproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyproviderProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MyproviderProvider Provider');
  }

}
