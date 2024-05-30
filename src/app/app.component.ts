import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvoiceComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
}
