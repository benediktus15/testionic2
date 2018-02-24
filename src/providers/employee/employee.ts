import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeProvider {

  public employee = [
    {
      name: 'Employee01',
      position: '1',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee02',
      position: '2',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee03',
      position: '3',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee04',
      position: '4',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee05',
      position: '5',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee06',
      position: '6',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee07',
      position: '7',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee08',
      position: '8',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee09',
      position: '9',
      photo: '../assets/imgs/boy.png'
    },
    {
      name: 'Employee10',
      position: '10',
      photo: '../assets/imgs/boy.png'
    }
  ];

  listEmployee(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.employee);
      observer.complete();
    })
  };

  addEmployee(dataEmployee){
    this.employee.push(dataEmployee);
  }

  constructor() {
    console.log('Hello Employee Provider');
  }

}
