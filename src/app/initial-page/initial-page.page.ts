import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.page.html',
  styleUrls: ['./initial-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InitialPagePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    const users = localStorage.getItem('Users');

    if(!users){
      localStorage.setItem('Users', JSON.stringify([]));
    }

    if(localStorage.getItem('User')){
      this.router.navigate(['/home'], { replaceUrl: true });
    }
  }

}
