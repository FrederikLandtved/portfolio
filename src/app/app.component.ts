import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string = 'Frederik Landtved';
  changingText: string = '';
  stringsToShow: string[] = ['Full stack developer', 'Angular developer', 'C# developer'];
  currentStringIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.changeText();
    this.changingText = this.stringsToShow[0];
    setInterval(() => {
      this.changeText();
    }, 3000);
  }

  changeText() {
    const element = document.querySelector('.changing-text') as HTMLElement;
    element.classList.remove('show');
    setTimeout(() => {
      this.changingText = this.stringsToShow[this.currentStringIndex++ % this.stringsToShow.length];
      element.classList.add('show');
    }, 1000);
  }
}
