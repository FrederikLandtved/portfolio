import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-frederik';
  public typedText: string = 'Frederik Landtved';

  constructor() { }

  ngOnInit(): void {
  }
}
