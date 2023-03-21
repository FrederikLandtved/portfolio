import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string = 'Frederik Landtved';
  changingText: string = '';
  stringsToShow: string[] = ['Full stack developer', 'Javascript developer', 'C# developer'];
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

  goToPage(typeOfLink: string) {
    let linkString: string = "";

    switch (typeOfLink) {
      case "github":
          linkString = "https://github.com/FrederikLandtved";
        break;
      case "linkedin":
        linkString = "https://www.linkedin.com/in/frederik-landtved-jensen-982a1a157/";
      break;
      default:
        break;
    }

    if(linkString !== ""){
      window.open(linkString, "_blank");
    }
  }

  downloadCV() {
    const fileUrl = '../assets/CV.pdf';
    const fileName = 'FrederikLandtvedCV.pdf';
    saveAs(fileUrl, fileName);
  }
}
