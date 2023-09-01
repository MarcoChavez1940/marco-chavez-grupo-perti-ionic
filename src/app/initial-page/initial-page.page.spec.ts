import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitialPagePage } from './initial-page.page';

describe('InitialPagePage', () => {
  let component: InitialPagePage;
  let fixture: ComponentFixture<InitialPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InitialPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
