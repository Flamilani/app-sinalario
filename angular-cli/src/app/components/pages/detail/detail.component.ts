import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CardService } from '../../../services/card.service';
import { Card } from '../../../models/Card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  imgLoading: any = 'assets/images/loading-coffee.gif';
  loaded: boolean = false;
  card$: Observable<Card>;

  title_card: string = 'Sinalário';

  id_card: number = 1;

  visualizado: number = 0;

  getStatusSinal(sinal: any) { (2)
    switch (sinal) {
      case 'green':
        return 'lightseagreen';
      case 'yellow':
        return 'yellow';
      case 'red':
        return 'red';
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) { }

  ngOnInit() {
    // this.loaded = true;
    // setTimeout(() => {
    //   this.loaded = false;
    this.card$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cardService.getCardDetail(params.get('idcard')))
    );
  // }, 3000);
  }

}
