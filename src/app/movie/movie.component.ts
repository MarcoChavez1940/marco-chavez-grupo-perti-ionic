import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { Movie } from '../services/data.service';
import { ViewMoviePage } from '../view-movie/view-movie.page';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
})
export class MovieComponent {
  @Input() movie!: Movie;

  constructor(public modalCtrl: ModalController){}

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ViewMoviePage,
      componentProps: this.movie
    });
    modal.present();
  }
}
