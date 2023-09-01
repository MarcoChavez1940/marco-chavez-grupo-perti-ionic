import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { MovieComponent } from '../movie/movie.component';

import { DataService, Movie } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MovieComponent],
})
export class HomePage {
  private data = inject(DataService);
  public movies: Movie[] = [];
  constructor(public router: Router) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
  async ngOnInit() {
    if (!localStorage.getItem('User')) {
      this.router.navigate(['/initial-page'], { replaceUrl: true });
    } else {
      this.movies = await this.data.getFullMovies();
    }
  }

  async filterList(event: any) {
    this.movies = await this.data.getFilterMovies(event.detail.value);
  }

  logout(): void {
    localStorage.removeItem('User');
    this.router.navigate(['/initial-page'], { replaceUrl: true });
  }
}
