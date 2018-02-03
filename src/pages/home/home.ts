import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataMoviePage } from '../data-movie/data-movie';

import { ConnectToApiProvider } from '../../providers/connect-to-api/connect-to-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  data : any;

  constructor(public navCtrl: NavController, private prov: ConnectToApiProvider) {
    this.prov.loadMovieDiscover().subscribe((data) => {
      this.data = data;
    });
  }

  goMovie(movie:any):void{
    this.navCtrl.push(DataMoviePage, {movie});
  }



}
