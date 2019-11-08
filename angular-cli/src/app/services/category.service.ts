import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Category } from './../models/Category';
import { Observable, of } from 'rxjs';
import { CATEGORIAS } from '../mocks/mock-categorys';
 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categ: any;
  serverApi: string = 'http://localhost:3000/';

  constructor(private http: Http) { }

  getListCategorys(): Observable<Category[]> {
    return of(CATEGORIAS);
  }
  
  getCategory(idcateg: number | string) {
    //  return this.categorias;
  /*     let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverApi + 'categorys', {headers: headers})
        .pipe(map(res => res.json()));  */
        return this.getListCategorys().pipe(
          map((categorys: Category[]) => categorys.find(categ => categ.idcateg === +idcateg))
        );
      }

   addCategory(categ: any) {
    //this.categorias.push(categ);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverApi + 'categorys/create', categ, {headers: headers})
    .pipe(map(res => res.json())); 
  } 


   /*  clearCategory() {
      this.categorias = [];
      return this.categorias;
    } */

     getAllCategorys() {
      return this.http.get(this.serverApi + 'categorys')
            .pipe(map(res => res.json()));
  }

  deleteCategory(id: any) {
    return this.http.delete(this.serverApi + 'categorys/delete/' + id)
    .pipe(map(res => res.json()));
  }

  UpdateCategory(categ) {
    return this.http.put(this.serverApi + 'categorys/' + categ._id, categ)
        .pipe(map(res => res));
  } 


  
}
