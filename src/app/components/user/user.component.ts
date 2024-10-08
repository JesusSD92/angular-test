import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserviewComponent } from './userview/userview.component';
import { FormUserComponent } from './form-user/form-user.component';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { PaginatorComponent } from "../paginator/paginator.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserviewComponent, FormUserComponent, PaginatorComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser: User;
  open: boolean = false;
  paginator: any = {};
  url: string = '/usuarios/page';

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.selectedUser = new User();
  }

  ngOnInit(): void {
    //this.userService.findAll().subscribe((users) => (this.users = users));
    this.route.paramMap.subscribe((params) => {
      const page: number = +(params.get('page') || '0');
      this.userService.findAllPageable(page).subscribe((pageable) => {
        this.users = pageable.content as User[]
        this.paginator = pageable;
      });
    });
  }

  addUser(user: User): void {
    if (user.id > 0) {
      this.userService.update(user).subscribe({
        next: (userUpdated) => {
          this.users = this.users.map((u) => u.id === userUpdated.id ? { ...userUpdated } : u);
        },
        error: (e) => {
          console.log(e.error);
        },
      });
    } else {
      this.userService.create(user).subscribe({
        next: (userCreated) => {
          this.users = [...this.users, { ...userCreated }];
        },
        error: (e) => {
          console.log(e.error);
        },
      });
    }
    Swal.fire({
      title: 'Exito!',
      text: 'Usuario guardado con éxito',
      icon: 'success',
    });
    this.selectedUser = new User();
    this.setOpen();
  }

  updateUser(user: User): void {
    this.selectedUser = { ...user };
    this.open = true;
  }

  removeUser(id: number): void {
    Swal.fire({
      title: 'Está seguro?',
      text: 'No podrás revertir el proceso',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(id).subscribe(() => {
          this.users = this.users.filter((user) => user.id !== id);
        });
        Swal.fire({
          title: 'Borrado!',
          text: 'Usuario borrado con éxito',
          icon: 'success',
        });
      }
    });
  }

  setOpen(): void {
    this.open = !this.open;
  }
}
