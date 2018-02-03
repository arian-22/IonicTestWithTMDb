import { NgModule } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card';
import { MovieSlideComponent } from './movie-slide/movie-slide';
@NgModule({
	declarations: [MovieCardComponent,
    MovieSlideComponent],
	imports: [],
	exports: [MovieCardComponent,
    MovieSlideComponent]
})
export class ComponentsModule {}
