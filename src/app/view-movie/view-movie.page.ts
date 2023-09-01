import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, ModalController, NavParams, Platform } from '@ionic/angular';
import { DataService, Movie } from '../services/data.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.page.html',
  styleUrls: ['./view-movie.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ViewMoviePage implements OnInit {
  public movie!: Movie;
  private activatedRoute = inject(ActivatedRoute);

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {}

  ngOnInit() {
    this.movie = this.navParams.data as Movie;
  }


  closeModal(){
    this.modalCtrl.dismiss();
  }
}
