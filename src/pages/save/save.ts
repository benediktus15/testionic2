import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {
  private dataBerita = {
    title: '',
    photo: '',
    description: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public beritaProvider: BeritaProvider) {
  }

  input() {
    this.beritaProvider.saveBerita(this.dataBerita)
    this.navCtrl.pop();
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
  }
}
