import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CardService } from '../../../services/card.service';
import { Card } from '../../../models/Card';

@Component({
  selector: 'app-modal-exemplo',
  templateUrl: './modal-exemplo.component.html',
  styleUrls: ['./modal-exemplo.component.less']
})
export class ModalExemploComponent implements OnInit {
  card$: Observable<Card>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.card$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cardService.getCardDetail(params.get('idcard')))
    );
  }

}
