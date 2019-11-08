import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CardService } from '../../../services/card.service';
import { Card } from '../../../models/Card';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {
  imgLoading: any = 'assets/images/loading-coffee.gif';
  loaded: boolean = false;

 cards$: Observable<Card[]>;
 category$: Observable<Category>;

 title_card = "Sinalário";

  // cards = CARDS;

/*    public cards: Card[] = [
    {idcard: 1, title: "Placa-Mãe", idcateg: 1, video: "", image: "../assets/uploads/placa-mae.jpg"},
    {idcard: 2, title: "Processador", idcateg: 1, video: "",  image: "../assets/uploads/processador.jpg"},
    {idcard: 3, title: "Monitor", idcateg: 1, video: "", image: "../assets/uploads/monitor.jpg"},
    {idcard: 4, title: "Placa de Vídeo", idcateg: 1, video: "", image: "../assets/uploads/placa-video.jpg"},
    {idcard: 5, title: "Teclado", idcateg: 1, video: "", image: "../assets/uploads/teclado.jpg"},
    {idcard: 6, title: "Fonte de Alimentação", idcateg: 1, video: "", image: "../assets/uploads/fonte.jpg"},
    {idcard: 7, title: "Memória RAM", idcateg: 1, video: "", image: "../assets/uploads/memoria_ram.jpg"},
    {idcard: 8, title: "Circuitos Eletrônicos", idcateg: 1, video: "", image: "../assets/uploads/circuitos.jpg"},
  ]; */
 
 // card: Card = this.cards[0];

  constructor(
   private cardService: CardService,
   private categoryService: CategoryService,
   private route: ActivatedRoute,
   private router: Router
) {
   
   }

  ngOnInit() {    
   
    // const idCard = +this.route.snapshot.paramMap.get('idcateg');
     
   //  console.log(idCard);

  /*    this.cards = this.route.paramMap.pipe(
       switchMap((params: ParamMap) =>
       this.cardService.getCard(params.get('idcateg')))
     ); */

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

  //   this.cardService.getCard(idCard).subscribe(card => this.card);


/*      if(idCard) {
      this.carregarCards(idCard);
     }
 */
  /*   this.loaded = true;
    setTimeout(() => {
      this.loaded = false;
    //  this.cards = this.cardService.getListCards();

    this.route.params.subscribe(
      (res: any) => console.log(res.id)); 
     // console.log('ID Rota', this.route.snapshot.params['idcard']);
     this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.cardService.getCard(params.get('idcard'))))
    }, 3000);*/
  }


/* 
  carregarCards(idCard: number) {
    this.cardService.getCard(idCard)
    .then(card => {
      this.card = card;
    })
    .catch(erro => this.errorHandler.handle(error));
  } */

}
