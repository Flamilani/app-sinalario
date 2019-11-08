import { Component, OnInit } from '@angular/core';
import { WordService } from '../../../services/word.service';
import { CategoryService } from '../../../services/category.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Word } from '../../../models/Word';
import { Category } from '../../../models/Category';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-words',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.less']
})
export class WordComponent implements OnInit {
  words: Word[];
  categorys: Category[];
  headers: String[];
  user_id: Object;

  name: String;
  category: String;
  description: String;


  constructor(private authService: AuthService,
    private categoryService: CategoryService,
    private wordService: WordService,
    private flashMessage: FlashMessagesService) {

    this.headers = [
      'Título',
      'Categoria',
      'Vídeo',
      'Figura',
      'Descrição',
      'Data',
      'Ações'
    ];
    this.loadWords();
   }

  ngOnInit() {
    this.loadUser();
    this.loadCategorys();
  }

  public loadUser() {
    this.authService.getProfile()
    .subscribe(profile => {
      this.user_id = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  public loadWords() {
    this.wordService.getAllWords()
    .subscribe(words => {
      this.words = words;
    });
  }

  public loadCategorys() {
    this.categoryService.getAllCategorys()
    .subscribe(categorys => {
      this.categorys = categorys;
    });
  }

  changeValue(value) {
    console.log(value);
 }

  onWordSubmit() {
    const word = {
      name: this.name,
      category: this.category,
      description: this.description

    };

  this.wordService.addWord(word).subscribe(data => {
    if (data.success) {
      this.loadWords();
      this.flashMessage.show('Adicionado com sucesso!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('Erro ao adicionar', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

  deleteWord(id: any) {

    if (confirm('Tem certeza de que quer deletar?')) {
      const words = this.words;
      this.wordService.deleteWord(id)
      .subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < words.length; i++) {
            if (words[i]._id === id) {
              words.splice(i, 1);
               if (data.success) {
                this.loadWords();
                this.flashMessage.show('Deletado com sucesso!', {cssClass: 'alert-success', timeout: 3000});
              } else {
                this.flashMessage.show('Erro ao deletar', {cssClass: 'alert-danger', timeout: 3000});
              }
            }
          }
        }

      });
  }
}

}
