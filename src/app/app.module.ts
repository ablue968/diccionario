import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './shared/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
