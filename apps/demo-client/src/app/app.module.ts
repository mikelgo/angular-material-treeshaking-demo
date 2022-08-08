import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScamModulesModule} from "@treeshaking-material-demo/scam-modules";



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ScamModulesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
