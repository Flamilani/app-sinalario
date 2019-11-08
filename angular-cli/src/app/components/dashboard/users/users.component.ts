import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { User } from './../../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  headers: String[];
  users: User[];

  constructor(private authService: AuthService) {
    this.headers = [
      'Nome',
      'Usuário',
      'Email',
      'Perfil',
      'Situação',
      'Ações'
    ];
    this.loadUsers();
  }

  ngOnInit() {
  }

  public loadUsers() {
    this.authService.getAllUsers()
    .subscribe(users => {
      this.users = users;
    });
  }

}
