import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { EmployeePage } from '../employee/employee';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = EmployeePage;
  tab3Root = ListPage;

  constructor() {

  }
}
