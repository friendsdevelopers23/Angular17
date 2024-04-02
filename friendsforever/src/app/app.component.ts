import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterOutlet  } from '@angular/router';
import { HomeComponent } from "./home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HomeComponent]
})
export class AppComponent {
  title = 'friendsforever';
  
}
