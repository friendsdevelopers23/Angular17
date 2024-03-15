import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
    { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
   { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];
