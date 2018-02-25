import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeProvider {

  public employee = [
    {
      name: 'Employee01',
      position: '1',
      photo: '../assets/imgs/boy.png',
      email: 'emp1@employee.com'
    },
    {
      name: 'Employee02',
      position: '2',
      photo: '../assets/imgs/boy.png',
      email: 'emp2@employee.com'
    },
    {
      name: 'Employee03',
      position: '3',
      photo: '../assets/imgs/boy.png',
      email: 'emp3@employee.com'
    },
    {
      name: 'Employee04',
      position: '4',
      photo: '../assets/imgs/boy.png',
      email: 'emp4@employee.com'
    },
    {
      name: 'Employee05',
      position: '5',
      photo: '../assets/imgs/boy.png',
      email: 'emp5@employee.com'
    },
    {
      name: 'Employee06',
      position: '6',
      photo: '../assets/imgs/boy.png',
      email: 'emp6@employee.com'
    },
    {
      name: 'Employee07',
      position: '7',
      photo: '../assets/imgs/boy.png',
      email: 'emp7@employee.com'
    },
    {
      name: 'Employee08',
      position: '8',
      photo: '../assets/imgs/boy.png',
      email: 'emp8@employee.com'
    },
    {
      name: 'Employee09',
      position: '9',
      photo: '../assets/imgs/boy.png',
      email: 'emp9@employee.com'
    },
    {
      name: 'Employee10',
      position: '10',
      photo: '../assets/imgs/boy.png',
      email: 'emp10@employee.com'
    }
  ];

  listEmployee(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.employee);
      observer.complete();
    })
  };

  detailEmployee(id) {
    return this.employee[id];
  }

  addEmployee(dataEmployee){
    this.employee.push(dataEmployee);
  }

  constructor() {
    console.log('Hello Employee Provider');
  }

}
