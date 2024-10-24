import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../models/user';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './form-user.component.html'
})
export class FormUserComponent implements OnInit {

  @Input() user: User;
  @Output() openEventEmitter = new EventEmitter();
  @Output() newUserEventEmitter: EventEmitter<User> = new EventEmitter();
  
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.user = new User();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +(params.get('id') || '0');

      if(id > 0){
        this.userService.findById(id).subscribe(user => this.user = user);
      }
    })
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

  onOpenClose(userForm: NgForm): void {
    this.openEventEmitter.emit();
    userForm.reset()
  }
}