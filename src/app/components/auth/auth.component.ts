import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  user: User;
  @Output() handlerEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private sharingData: SharingDataService) { 
    this.user = new User();
  }

  onSubmit() {
    if(!this.user.username || !this.user.password) {
      Swal.fire(
        'Error de validación',
        'Por favor, rellena los campos username y password',
        'error'
      );
    }else{
      this.sharingData.handlerLoginEventEmitter.emit(
        {
          username: this.user.username, 
          password: this.user.password
        }
      );
    }
  }
}
