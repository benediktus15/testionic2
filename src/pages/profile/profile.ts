import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  imageUrl: string = '../../assets/imgs/bg1.jpeg';

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
