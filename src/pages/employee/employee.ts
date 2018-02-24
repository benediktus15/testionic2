import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeProvider } from '../../providers/employee/employee';
import { AddEmployeePage } from '../add-employee/add-employee';

@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public employeeProvider: EmployeeProvider) {
  }

  addEmployee() {
    this.navCtrl.push(AddEmployeePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }

}
