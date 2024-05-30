import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListItemsComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {
  
  invoice!: Invoice;

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  constructor(private service: InvoiceService) {}
}