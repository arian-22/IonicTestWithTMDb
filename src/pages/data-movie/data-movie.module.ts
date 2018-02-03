import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataMoviePage } from './data-movie';

@NgModule({
  declarations: [
    DataMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(DataMoviePage),
  ],
})
export class DataMoviePageModule {}
