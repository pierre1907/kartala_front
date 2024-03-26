import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
 


@NgModule({
  declarations: [
    AppComponent,
  ],
   bootstrap: [AppComponent],

  imports: [
    BrowserModule,
    //CommonModule,
    HttpClientModule,


  ],
  providers: [
  ],
})
export class AppModule { }
