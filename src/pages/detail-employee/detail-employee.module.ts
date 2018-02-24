import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailEmployeePage } from './detail-employee';

@NgModule({
  declarations: [
    DetailEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailEmployeePage),
  ],
})
export class DetailEmployeePageModule {}
