import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserviewComponent } from './userview/userview.component';
import { FormUserComponent } from './form-user/form-user.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserviewComponent, FormUserComponent],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  title: string = "Listado de usuarios";

  users: User[] = [];

  selectedUser: User;

  constructor(private userService: UserService) {
    this.selectedUser = new User();
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User): void {
    if(user.id > 0){
      this.users = this.users.map(u => (u.id === user.id) ? {... user} : u);
    }else{
      this.users = [... this.users, {... user}];
    }
    Swal.fire({
      title: "Exito!",
      text: "Usuario creado con éxito",
      icon: "success"
    });
    this.selectedUser = new User();
  }

  updateUser(user: User): void {
    this.selectedUser = {... user};
  }

  removeUser(id: number): void {
    Swal.fire({
      title: "Está seguro?",
      text: "No podrás revertir el proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id !== id);
        Swal.fire({
          title: "Borrado!",
          text: "Usuario borrado con éxito",
          icon: "success"
        });
      }
    });
  }
}
