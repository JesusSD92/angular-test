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
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

  onAddCart(product: Product): void {
    this.items = [... this.items, { product: {...product}, quantity: 1 }];
  }
}
