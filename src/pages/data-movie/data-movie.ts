import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-movie',
  templateUrl: 'data-movie.html'
})
export class DataMoviePage {
  movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('movie'));
    this.movie = this.navParams.get('movie');
  }

  ionViewDidLoad() {
    
  }

}
