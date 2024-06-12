import { Component, Input } from '@angular/core';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent {

  @Input() items: CartItem[] = [];

}
