import { SeoService } from './seo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdToolbarModule } from '@angular/material/toolbar';
import { MdListModule } from '@angular/material/list';
import { MdIconModule } from '@angular/material/icon';
import { MdCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'universal-demo-app'
    }),

    MdToolbarModule.forRoot(),
    MdListModule.forRoot(),
    MdIconModule.forRoot(),
    MdCardModule.forRoot(),

    FormsModule,
    HttpModule
  ],
  providers: [
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
