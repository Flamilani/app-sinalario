import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CardService } from '../../../services/card.service';
import { Card } from '../../../models/Card';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.less']
})
export class WordsComponent implements OnInit {
  imgLoading: any = 'assets/images/loading-coffee.gif';
  loaded: boolean = false;

 cards$: Observable<Card[]>;
 category$: Observable<Category>;

 title_card = "Sinalário";

  constructor(
    private cardService: CardService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loaded = true;
    setTimeout(() => {
      this.loaded = false;
    this.category$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.categoryService.getCategory(params.get('idcateg')))
    ); 

    this.route.params.subscribe( params => this.cardService.getListCardByIdcateg(params['idcateg']));
    
    this.cards$ = this.route.paramMap.pipe(
     switchMap(params => {
    return this.cardService.getListCardByIdcateg(params.get('idcateg'));
     })
     ); 
   }, 0);
  }

}
