import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {
  @Output() onChangeTab = new EventEmitter<number>();

  currentTab: number = 1;

  setTab(newTab: number) {
    this.onChangeTab.emit(newTab);
    this.currentTab = newTab;
  }
}
