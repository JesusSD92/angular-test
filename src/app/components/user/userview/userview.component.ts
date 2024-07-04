import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'userview',
  standalone: true,
  imports: [],
  templateUrl: './userview.component.html'
})
export class UserviewComponent {

  @Input() users: User[] = [];
}
