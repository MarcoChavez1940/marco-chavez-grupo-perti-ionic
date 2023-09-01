import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router';

import { ViewMoviePage } from './view-movie.page';

describe('ViewMoviePage', () => {
  let component: ViewMoviePage;
  let fixture: ComponentFixture<ViewMoviePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ViewMoviePage, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
