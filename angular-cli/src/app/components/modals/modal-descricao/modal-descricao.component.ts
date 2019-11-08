import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CardService } from '../../../services/card.service';
import { Card } from '../../../models/Card';

@Component({
  selector: 'app-modal-descricao',
  templateUrl: './modal-descricao.component.html',
  styleUrls: ['./modal-descricao.component.less']
})
export class ModalDescricaoComponent implements OnInit {
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
