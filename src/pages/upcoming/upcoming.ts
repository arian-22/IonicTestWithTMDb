import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ConnectToApiProvider } from '../../providers/connect-to-api/connect-to-api';


/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {
  data: any;
  
  constructor(public navCtrl: NavController, private prov: ConnectToApiProvider) {
    this.prov.loadMovieUpcoming().subscribe((data) => {
      this.data = data;
    });
  }

}
