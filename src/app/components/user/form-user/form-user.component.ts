import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-user.component.html'
})
export class FormUserComponent {

  @Input() user: User;
  @Output() openEventEmitter = new EventEmitter();
  @Output() newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  constructor() {
    this.user = new User();
  }

  onSubmit(userForm: NgForm): void {
    if(userForm.valid) {
      this.newUserEventEmitter.emit(this.user);
    }
    userForm.reset();
    userForm.resetForm();
  }

  onClear(userForm: NgForm): void {
    userForm.resetForm();
  }

  onOpenClose(): void {
    this.openEventEmitter.emit();
  }
}