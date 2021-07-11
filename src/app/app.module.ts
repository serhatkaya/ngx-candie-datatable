import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CandieTableModule } from 'projects/ngx-candie-datatable/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandieTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
