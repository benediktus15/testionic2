import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BeritaProvider {

  public berita = [
    {
      title: "ICW: Sektor Transportasi Paling Banyak Korupsi Pengadaan Barang dan Jasa",
      photo: "https://asset.kompas.com/crop/100x70:900x603/750x500/data/photo/2018/02/25/4181075583.jpg",
      description: "JAKARTA - Pengadaan barang dan jasa menjadi titik paling rawan korupsi. Pada 2017 misalnya, ada 241 kasus korupsi terkait dengan pengadaan barang dan jasa, jumlah ini naik dari tahun sebelumnya yang hanya 195 kasus. Sementara itu bicara sektor mana yang paling banyak diterpa korupsi pengawasan baran dan jasa, jawabannya yakni sektor transportasi. 'Ini terkait dengan perhubungan dan dinas Pekerjaan Umum di daerah.' ujar Koordinator Divisi Investigas ICW Febri Hendri di Jakarta, Minggu (25/2/2018). Di tempat yang sama Staf Divisi Investigasi ICW Wana Alamsyah menyampaikan, terjadi 46 kasus korupsi dengan nilai kerugian negara mencapai Rp 912 miliar pada 2017. Kasus korupsi di sektor transportasi jauh di atas sektor anggaran desa yang terdiri dari 27 kasus dengan nilai kerugian negara Rp 20 miliar. Di bawahnnya ada sektor pendidikan dengan 25 kasus dan nilai kerugian negara Rp 61,1 miliar, sektor pemerintahan dengan 20 kasus dengan nilai kerugian negara Rp 89,4 miliar, dan sektor kesehatan dengan 18 kasus dan nilai kerugian negara Rp 51 miliar. Dari kasus-kasus korupsi pengadaan barang dan jasa, ICW mengungkap ada 11 modus. Diantaranya yakni penyalahgunaan anggaran sebanyak 67 kasus, mark up 60 kasus, kegiatan proyek fiktif 33 kasus dan penyalahgunaan wewenang 26 kasus. Baca juga : Tren Modus Korupsi 2017 Versi ICW Total kerugian negara akibat korupsi pengadaan barang dan jasa pada 2017 mencapai Rp 1,5 triliun. Kasus korupsi pengadaan barang dan jasa menjerap kepala daerah hingga korporasi.",
      time: '25/02/2018, 19:35 WIB'
    },
    {
      title: "Title dua",
      photo: "https://cdn.pixabay.com/photo/2018/01/23/05/40/brussels-sprouts-3100702_960_720.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!",
      time: '24-02-2018'
    },
    {
      title: "Title tiga",
      photo: "https://cdn.pixabay.com/photo/2015/04/03/20/52/milan-705880__180.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!",
      time: '24-02-2018'
    },
    {
      title: "Title empat",
      photo: "https://cdn.pixabay.com/photo/2017/10/29/07/35/poster-2899083__180.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!",
      time: '24-02-2018'
    },
    {
      title: "Title lima",
      photo: "https://cdn.pixabay.com/photo/2017/10/29/07/36/poster-2899089__180.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!",
      time: '24-02-2018'
    },
  ]

  listBerita(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.berita);
      observer.complete();
    })
  }

  detailBerita(id) {
    return this.berita[id]
  }

  saveBerita(dataBerita) {
    this.berita.push(dataBerita);
  }

  constructor() {
    console.log('Hello BeritaProvider Provider');
  }

}
