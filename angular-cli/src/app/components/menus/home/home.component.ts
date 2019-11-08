import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  imgLoading: any = 'assets/images/loading-coffee.gif';
  loaded: boolean = false;
  imgLibras: any = '../assets/uploads/libras.gif';

  constructor() { }

  ngOnInit() {
    this.loaded = true;
    setTimeout(() => {
      this.loaded = false;
    }, 3000);
  }

}
