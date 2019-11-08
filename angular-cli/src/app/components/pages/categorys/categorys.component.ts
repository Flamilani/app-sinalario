import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/Category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.less']
})
export class CategorysComponent implements OnInit {
  imgLoading: any = '../assets/images/loading-coffee.gif';
  imgEmBreve: any = '../assets/images/maintenance.png'; 
  loaded: boolean = false;

  categorys$: Observable<Category[]>;

/* 
   categorias = [
    { "idcateg": 1, "title": "Hardware", "image": "../assets/uploads/hardware.jpg"},
    { "idcateg": 2, "title": "Software", "image": "../assets/uploads/software.jpg" },
    { "idcateg": 3, "title": "Redes Sociais", "image": "../assets/uploads/redes_sociais.jpg" },
    { "idcateg": 4, "title": "Linguagem de programação", "image": "../assets/uploads/programming_language.jpg" }
  ];  */

  constructor(
   private categoryService: CategoryService,
   private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.categorys$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.categoryService.getListCategorys();
      })
    );  
  }

}
