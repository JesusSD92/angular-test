import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'userview',
  standalone: true,
  imports: [],
  templateUrl: './userview.component.html'
})
export class UserviewComponent {

  @Input() users: User[] = [];
  @Output() idUserEventEmitter = new EventEmitter();
  @Output() userEventEmitter = new EventEmitter();

  onUpdateUser(user: User): void {
    this.userEventEmitter.emit(user);
  }

  onRemoveUser(id: number): void {
    this.idUserEventEmitter.emit(id);
  }
}
