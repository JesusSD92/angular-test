import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'userview',
  standalone: true,
  imports: [],
  templateUrl: './userview.component.html'
})
export class UserviewComponent {

  constructor(private authService: AuthService) {}

  @Input() users: User[] = [];
  @Output() idUserEventEmitter = new EventEmitter();
  @Output() userEventEmitter = new EventEmitter();

  onUpdateUser(user: User): void {
    this.userEventEmitter.emit(user);
  }

  onRemoveUser(id: number): void {
    this.idUserEventEmitter.emit(id);
  }

  get isAdmin(){
    return this.authService.isAdmin();
  }
}
