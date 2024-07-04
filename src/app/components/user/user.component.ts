import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserviewComponent } from './userview/userview.component';
import { FormUserComponent } from './form-user/form-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserviewComponent, FormUserComponent],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  title: string = "Listado de usuarios";

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User): void {
    this.users = [... this.users, {... user}];
  }
}
