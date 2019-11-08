import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/menus/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/menus/register/register.component';
import { ProfileComponent } from './components/menus/profile/profile.component';
import { SearchComponent } from './components/includes/search/search.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { CardsComponent } from './components/pages/cards/cards.component';
import { CategoryComponent } from './components/dashboard/category/category.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { WordService } from './services/word.service';
import { CardService } from './services/card.service';
import { CategoryService } from './services/category.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/menus/login/login.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { WordComponent } from './components/dashboard/word/word.component';
import { WordsComponent } from './components/pages/words/words.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { CategorysComponent } from './components/pages/categorys/categorys.component';
import { Error404Component } from './components/includes/error404/error404.component';
import { ManutencaoComponent } from './components/manutencao/manutencao.component';
import { RemoveCharactersPipe } from './pipes/remove-characters.pipe';
import { ReplaceUnderscorePipe } from './pipes/replace-underscore.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { ModalDescricaoComponent } from './components/modals/modal-descricao/modal-descricao.component';
import { ModalExemploComponent } from './components/modals/modal-exemplo/modal-exemplo.component';
import { SortRandomPipe } from './pipes/sort-random.pipe';
import { ContactComponent } from './components/menus/contact/contact.component';
import { AboutComponent } from './components/menus/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileComponent,
    SearchComponent,
    DetailComponent,
    CardsComponent,
    CategoryComponent,
    DashboardComponent,
    TabsComponent,
    LoginComponent,
    UsersComponent,
    WordsComponent,
    WordComponent,
    FooterComponent,
    CategorysComponent,
    Error404Component,
    ManutencaoComponent,
    RemoveCharactersPipe,
    ReplaceUnderscorePipe,
    OrderPipe,
    ModalDescricaoComponent,
    ModalExemploComponent,
    SortRandomPipe,
    ContactComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [CategoryService, AuthService, ValidateService, AuthGuard, WordService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
