import { Component, EventEmitter, Input, LOCALE_ID, Output } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'

registerLocaleData(localeEs);

@Component({
  selector: 'cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent {

  @Input() items: CartItem[] = [];
  @Input() total: number = 0;
  @Output() idProductEventEmitter = new EventEmitter();

  onDeleteCart(id:number): void {
    this.idProductEventEmitter.emit(id);
  }
}
