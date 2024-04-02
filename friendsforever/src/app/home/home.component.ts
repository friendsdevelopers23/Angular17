import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
[x: string]: any;
  @Input()
  imageUrl!: string;
  @Input()
  imageAlt!: string;
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  buttonLabel!: string;

  constructor() { }

  ngOnInit(): void {
  }


}
