import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataMoviePage } from '../../pages/data-movie/data-movie';

/**
 * Generated class for the MovieSlideComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-slide',
  templateUrl: 'movie-slide.html',
  inputs: ['movie']

})
export class MovieSlideComponent {

  constructor(public navCtrl: NavController) {
 
  }
  goToInfoMovie(movie:any) {
    this.navCtrl.push(DataMoviePage, {movie});

  }
}
