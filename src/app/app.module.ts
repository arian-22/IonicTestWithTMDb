import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { AboutPage } from '../pages/about/about';
import { MovieCardComponent } from '../components/movie-card/movie-card';
import { MovieSlideComponent } from '../components/movie-slide/movie-slide';

import { DataMoviePage } from '../pages/data-movie/data-movie';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnectToApiProvider } from '../providers/connect-to-api/connect-to-api';
import { HttpClientModule } from '@angular/common/http/';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UpcomingPage,
    AboutPage,
    MovieCardComponent,
    MovieSlideComponent,
    DataMoviePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UpcomingPage,
    AboutPage,
    MovieCardComponent,
    MovieSlideComponent,
    DataMoviePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectToApiProvider
  ]
})
export class AppModule {}
