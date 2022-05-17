import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss']
})

export class MoviesPage {
  searchName: any;
  movies: any;

  constructor(
    private modalCtrl: ModalController,
    private movieService: MovieService
    ) { }

  ngOnInit() {
  }

  searchMovies(key: any) {
    this.searchName = key.target.value;
    this.movieService.getMovieByName(this.searchName).subscribe((res: any) => {
      this.movies = res.Search;
    });
  }

  openDetails(movieId) {
    this.movieService.getMovieById(movieId).subscribe(async (res: any) => {
      const modal = await this.modalCtrl.create({
        component: DetailsComponent,
        componentProps: {
          date: res.Released,
          name: res.Title,
          language: res.Language,
          plot: res.Plot,
          genre: res.Genre,
          director: res.Director,
          actors: res.Actors
        }
      });

      await modal.present();

    });

  }
}
