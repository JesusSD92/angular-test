import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from './catalog/catalog.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItem } from '../../models/cartItem';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CatalogComponent, CartItemComponent, SidebarModule, ButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;
  sidebarVisible: boolean = false;
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
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
    this.saveSession();
  }

  onDeleteCart(id:number): void {
    this.items = this.items.filter(item => item.product.id !== id);
    this.calculateTotal();
    this.saveSession();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
