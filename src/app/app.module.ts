import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomValidatedFormComponent } from './custom-validation/custom-validation'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, CustomValidatedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
