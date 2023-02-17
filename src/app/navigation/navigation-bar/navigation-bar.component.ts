import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  tabbarIsShown: boolean = false;
  sideBarIsShown: boolean = true;

  @ViewChild('mySidenav') myDiv: ElementRef;
  @ViewChild('mobileTabBar') tabBar: ElementRef;

  toggleMenu() {
    this.sideBarIsShown = true;
    this.myDiv.nativeElement.style.width = "300px";
  }

  closeNav() {
    this.sideBarIsShown = false;
    this.myDiv.nativeElement.style.width = "0";
  }
}
