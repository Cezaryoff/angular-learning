import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { FirstFourLessonsComponent } from './first-four-lessons/first-four-lessons.component';
import { FiveToComponent } from './five-events/five-to.component';
import {DataService} from './data.service';
import { TenAnimationsComponent } from './ten-animations/ten-animations.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

// import { DataService} from './data.service'; it is not necessaary

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    FirstFourLessonsComponent,
    FiveToComponent,
    TenAnimationsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
