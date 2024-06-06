import { Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: "invoices", component: InvoiceComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "cart", component: CartComponent}
];
