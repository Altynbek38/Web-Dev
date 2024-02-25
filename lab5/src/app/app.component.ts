import { Component } from '@angular/core';
import { categories } from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [...categories];

  selectedCategory: number = 0;
  selectCategory(categoryId: number) {
    this.selectedCategory = categoryId;
    console.log(categoryId);
  } 

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/