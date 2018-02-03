import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MovieCardComponent } from '../../components/movie-card/movie-card';
import { DataMoviePage } from '../data-movie/data-movie';

import { ConnectToApiProvider } from '../../providers/connect-to-api/connect-to-api';
import { directiveDef } from '@angular/core/src/view/provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  data : any;

  constructor(public navCtrl: NavController, private prov: ConnectToApiProvider) {
    this.prov.loadMovieDiscover().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  goMovie():void{
    this.navCtrl.push(DataMoviePage);
  }



}
