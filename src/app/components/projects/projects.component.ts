import { Component } from '@angular/core';

@Component({
  selector: 'my-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  currentShown: number = 1;

  changeCurrentTab(newTab: number) {
    this.currentShown = newTab;
  }
}
