import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvoiceComponent, CommonModule, RouterOutlet, HeaderComponent, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
