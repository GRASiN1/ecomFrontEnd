import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {

  acitivatdCategoryId: number = 0;
  productList: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.acitivatdCategoryId = res.id;
      this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.getProductByCategoryId(this.acitivatdCategoryId).subscribe((res: any) => {
      this.productList = res.data;
    })
  }

}
