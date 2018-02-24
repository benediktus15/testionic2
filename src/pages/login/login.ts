import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username = '';
  private password = '';
  private error = '';

  public rootPage: any = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ok() {
    console.log('ok'+ this.password)
    if(this.username == 'user' && this.password == '123') {
      this.navCtrl.push(TabsPage)
    } else {
      this.error="username: user; pass: 123"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
