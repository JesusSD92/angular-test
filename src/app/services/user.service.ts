import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { users } from '../data/user.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User [] = users;
  
  constructor() {}

  findAll() : Observable <User[]>  {
    return of(this.users);
  }
}
