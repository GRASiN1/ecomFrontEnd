import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categoryObj: any = {
    "categoryId": 0,
    "categoryName": '',
  }
  products$: Observable<any>;
  isSidePanelVisible: boolean = false;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

  onSave() {
    this.productService.createCategory(this.categoryObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product Created');
      }
      else alert("Error: " + res.message);
    });

  }

}
