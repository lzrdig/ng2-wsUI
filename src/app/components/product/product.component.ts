import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from './product';

@Component({
  templateUrl: './product.component.html',
})

export class ProductComponent
// tslint:disable-next-line:one-line
{
  products: Product[];

  constructor(private productService: ProductService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
     this.products = this.productService.getProducts();
  }
}
