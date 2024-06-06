import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

  constructor(private productService: ProductService) {}
}
