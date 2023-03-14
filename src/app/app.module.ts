import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TabbarComponent } from './navigation/tabbar/tabbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProjectsComponent,
    TabbarComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
