import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ValidatorComponent } from './Fibonacci/components/validator/validator.component';


import { ValidatorService } from './Fibonacci/services/validator.service';

@NgModule({
  declarations: [
    AppComponent,
    ValidatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ValidatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
