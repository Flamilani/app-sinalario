import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Word } from './../models/Word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  serverApi: string = 'http://localhost:3000/';

  constructor(private http: Http) { }

  addWord(newWord) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverApi + 'words/create', newWord, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getWord() {
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get(this.serverApi + 'words', {headers: headers})
      .pipe(map(res => res.json()));
    }

    getAllWords() {
      return this.http.get(this.serverApi + 'words')
            .pipe(map(res => res.json()));
  }

  deleteWord(id: any) {
    return this.http.delete(this.serverApi + 'words/delete/' + id)
    .pipe(map(res => res.json()));
  }

  UpdateWord(categ) {
    return this.http.put(`${this.serverApi}/words/${categ._id}`, categ)
        .pipe(map(res => res));
  }
}
