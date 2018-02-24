import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeProvider } from '../../providers/employee/employee';

@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {

  dataEmployee = {
    name: '',
    position: '',
    photo: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public employeeProvider: EmployeeProvider) {
  }

  save() {
    this.employeeProvider.addEmployee(this.dataEmployee);
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeePage');
  }

}
