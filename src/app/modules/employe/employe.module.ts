import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeRoutingModule } from './employe-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeService } from '../../core/services/employe.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    HttpClientModule,

  ],
  providers: [
    EmployeService,

  ]
})
export class EmployeModule { }
