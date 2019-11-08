import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/menus/home/home.component';
import { CategorysComponent } from './components/pages/categorys/categorys.component';
import { CardsComponent } from './components/pages/cards/cards.component';
import { WordsComponent } from './components/pages/words/words.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { ManutencaoComponent } from './components/manutencao/manutencao.component';
import { Error404Component } from './components/includes/error404/error404.component';

import { AuthGuard } from './guards/auth.guard';

import { RegisterComponent } from './components/menus/register/register.component';
import { ProfileComponent } from './components/menus/profile/profile.component';
import { SearchComponent } from './components/includes/search/search.component';
import { CategoryComponent } from './components/dashboard/category/category.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/menus/login/login.component';
import { UsersComponent } from './components/dashboard/users/users.component';
// import { WordsComponent } from './components/dashboard/words/words.component';

const routes: Routes = [
 // {path: '', component: ManutencaoComponent},
  {path: '', component: HomeComponent},
 // {path: 'categorias', component: CategorysComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'words', component: WordsComponent},
 // {path: 'cards/:idcateg', component: CardsComponent},
  {path: 'detalhe/:idcard/:title', component: DetailComponent},
  {path: '**', component: Error404Component}
/*   {path: 'cadastro', component: RegisterComponent},
  {path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'pesquisa', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: CategoryComponent},
      { path: 'categorias', component: CategoryComponent, canActivate: [AuthGuard]},
      { path: 'usuarios', component: UsersComponent, canActivate: [AuthGuard]},
      { path: 'termos', component: WordsComponent, canActivate: [AuthGuard]}
    ]
} */
];

@NgModule({
  imports: [
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }