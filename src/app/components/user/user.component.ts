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
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users: User[] = [];
  selectedUser: User;
  open: boolean = false;

  constructor(private userService: UserService) {
    this.selectedUser = new User();
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User): void {
    if(user.id > 0){
      this.userService.update(user).subscribe(userUpdated => {
        this.users = this.users.map(u => (u.id === userUpdated.id) ? {... userUpdated} : u);
      })
    }else{
      this.userService.create(user).subscribe(userCreated => {
        this.users = [... this.users, {... userCreated}];
      })
    }
    Swal.fire({
      title: "Exito!",
      text: "Usuario guardado con éxito",
      icon: "success"
    });
    this.selectedUser = new User();
    this.setOpen();
  }

  updateUser(user: User): void {
    this.selectedUser = {... user};
    this.open = true;
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
        this.userService.delete(id).subscribe(() => {
          this.users = this.users.filter(user => user.id !== id);
        })
        Swal.fire({
          title: "Borrado!",
          text: "Usuario borrado con éxito",
          icon: "success"
        });
      }
    });
  }

  setOpen() : void {
    this.open = !this.open;
  }
}
