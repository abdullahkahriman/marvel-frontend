import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImagePreloadDirective } from 'src/directives/img-preload-directive';

@NgModule({
  declarations: [
    AppComponent,
    ImagePreloadDirective

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
