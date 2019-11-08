import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from './../../../services/category.service';
import { ValidateService } from './../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Category } from './../../../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  categorys: Category[];
  headers: String[];

  id: number;
  title: string;
  submitted = false;
  registerForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private formBuilder: FormBuilder
    ) {
    this.headers = [
      'ID',
      'Nome',
      'Ações'
    ];
    this.loadCategorys();
   }

  ngOnInit() {
    this.loadCategorys();

  }

  get f() {
    return this.registerForm.controls;
  }

  public loadCategorys() {
    this.categoryService.getAllCategorys()
    .subscribe(categorys => {
      this.categorys = categorys;
    });
  }

   deleteCateg(id: any) {

    if (confirm('Tem certeza de que quer deletar?')) {
      const categorys = this.categorys;
      this.categoryService.deleteCategory(id)
      .subscribe(data => {
        categorys.splice(this.categorys.indexOf(id), 1);
        if (!data.success) {
          this.flashMessage.show('Categoria deletada com sucesso!', {cssClass: 'alert-success', timeout: 3000});
          this.loadCategorys();
        } else {
          this.flashMessage.show('Erro ao deletar', {cssClass: 'alert-danger', timeout: 3000});
        }
      });
  }
}

  clear() {
    this.id = 0;
    this.title = '';
  }

  onCategorySubmit() {

    const category = {
      id: this.id,
      title: this.title
    };


  this.categoryService.addCategory(category).subscribe(data => {
    if (data.success) {
      this.flashMessage.show('Categoria adicionada com sucesso!', {cssClass: 'alert-success', timeout: 3000});
      this.clear();
      this.loadCategorys();
      } else {
        this.flashMessage.show('Erro ao adicionar', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
