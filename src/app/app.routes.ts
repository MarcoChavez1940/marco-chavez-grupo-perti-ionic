import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'message/:id',
    loadComponent: () =>
      import('./view-movie/view-movie.page').then((m) => m.ViewMoviePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'initial-page',
    loadComponent: () => import('./initial-page/initial-page.page').then(m => m.InitialPagePage)
  },
  {
    path: '',
    redirectTo: 'initial-page',
    pathMatch: 'full',
  },
];

