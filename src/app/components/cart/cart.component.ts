import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from './catalog/catalog.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CatalogComponent, CartItemComponent],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.findAll();
    this.calculateTotal();
  }

  onAddCart(product: Product): void {
    const hasItem = this.items.find(item => item.product.id === product.id);

    if(hasItem){
      this.items = this.items.map(item => {
        if(item.product.id === product.id){
          return {
            ... item,
            quantity: item.quantity + 1
          }
        }
        return item;
      });
    }else{
      this.items = [... this.items, { product: {...product}, quantity: 1 }];
    }
    this.calculateTotal();
  }

  onDeleteCart(id:number): void {
    this.items = this.items.filter(item => item.product.id !== id);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
  }
}
