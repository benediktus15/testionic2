import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  qty: any;

  ngOnInit() {
      console.log(this.qty);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Transfer',
      subTitle: 'Masukkan Nilai',
      buttons: ['Ok']
    });
    alert.present();
  }

  request() {
    let alert = this.alertCtrl.create({
      title: 'Request',
      buttons: ['Ok']
    });
    alert.present();
  }

  send() {
    let alert = this.alertCtrl.create({
      title: 'Send',
      buttons: ['Ok']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }

}
