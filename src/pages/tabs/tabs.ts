import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { TransferPage } from '../transfer/transfer';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = TransferPage;
  tab3Root = ListPage;

  constructor() {

  }
}
