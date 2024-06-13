import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'cart-item',
  standalone: true,
  imports: [],
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
