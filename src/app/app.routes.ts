import { Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { AuthComponent } from './components/auth/auth.component';
import { authGuard } from './guards/auth.guard';
import { FormUserComponent } from './components/user/form-user/form-user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: "invoices", component: InvoiceComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "productos", component: CartComponent },
    { path: "userForm", component: FormUserComponent, canActivate: [authGuard]},
    { path: "usuarios", component: UserComponent },
    { path: "usuarios/page/:page", component: UserComponent},
    { path: "login", component: AuthComponent }
];
