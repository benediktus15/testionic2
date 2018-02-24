import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';
import { DetailPage } from '../detail/detail';
import { SavePage } from '../save/save';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public beritaProvider: BeritaProvider) {
  }
  
  input(){
    this.navCtrl.push(SavePage);
  }

  detail(b) {
    this.navCtrl.push(DetailPage, { berita: b })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
