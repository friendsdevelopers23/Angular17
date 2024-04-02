import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReferencesComponent } from './references/references.component';

export const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
    { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'gallery-component', component: GalleryComponent },
  { path: 'blog-component', component: BlogComponent },
  { path: 'contactus-component', component: ContactusComponent },
  { path: 'references-component', component: ReferencesComponent },

   { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];
