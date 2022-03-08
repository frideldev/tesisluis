import { core } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPrueba2Component } from './header-prueba2/header-prueba2.component';
import { HeaderPrueba3Component } from './header-prueba3/header-prueba3.component';
import { HeaderPrueba4Component } from './header-prueba4/header-prueba4.component';
import { HeaderPrueba5Component } from './header-prueba5/header-prueba5.component';
import { HeaderPrueba6Component } from './header-prueba6/header-prueba6.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPrueba2Component,
    HeaderPrueba3Component,
    HeaderPrueba4Component,
    HeaderPrueba5Component,
    HeaderPrueba6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



