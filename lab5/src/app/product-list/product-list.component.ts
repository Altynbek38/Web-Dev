import { Component, Input } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() categoryId: any;

  products = [...products];

  shareTg(urlKaspi: string) {
    window.location.href = `https://t.me/share/url?url=${encodeURIComponent(urlKaspi)}`;
  }

  shareWa(urlKaspi: string) {
    window.location.href = `whatsapp://send?text=${encodeURIComponent(urlKaspi)}`;
  }

  onNotify() {
    window.alert('Wou will be notidied when the product goes on sale')
  }

  removeProduct(product: any) {
    this.products = this.products.filter(p => p !== product);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/