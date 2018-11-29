import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mission1Component } from './mission1/mission1.component';
import { Mission2Component } from './mission2/mission2.component';
import { Mission3Component } from './mission3/mission3.component';

@NgModule({
  declarations: [
    AppComponent,
    Mission1Component,
    Mission2Component,
    Mission3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
