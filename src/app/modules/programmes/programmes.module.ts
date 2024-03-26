import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammesRoutingModule } from './programmes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ProgrammesRoutingModule,
    ToastrModule
  ]
})
export class ProgrammesModule { }
