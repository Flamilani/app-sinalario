import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Card } from './../models/Card';
import { CARDS } from './../mocks/mock-cards';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 // serverApi: string = 'http://localhost:3000/';

  constructor() { }
  
   getListCards(): Observable<Card[]> {
    return of(CARDS);
  } 

  getListCardByIdcateg(idcateg: number | string): Observable<Card[]> {
    return of(CARDS);
  } 

  getCard(idcateg: number | string) {
    return this.getListCards().pipe(
      map((cards: Card[]) => cards.find(card => card.idcateg === + idcateg))
    );
  }
  getCardDetail(idcard: number | string) {
    return this.getListCards().pipe(
      map((cards: Card[]) => cards.find(card => card.idcard === + idcard))
    );
  }
}
