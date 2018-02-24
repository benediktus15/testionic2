import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeProvider } from '../../providers/employee/employee';

@IonicPage()
@Component({
  selector: 'page-detail-employee',
  templateUrl: 'detail-employee.html',
})
export class DetailEmployeePage {

  private dataEmployee = {
    name: '',
    position: '',
    photo: ''
  }

  imageUrl: string = '../../assets/imgs/bg1.jpeg';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public employeeProvider: EmployeeProvider) {
    this.dataEmployee = navParams.get('employee');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEmployeePage');
  }

}
