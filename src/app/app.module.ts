import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    FooterComponent //component,directives,pipes
  ],
  imports: [
    BrowserModule, //include other modules
    AppRoutingModule
  ],
  providers: [],//specify services
  bootstrap: [AppComponent] //components which can be called in main html
})
export class AppModule { }
