import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productss.component.html',
  styleUrl: './productss.component.css'
})
export class ProductssComponent {

  productList: any[] = [];
  categoryList: any[] = [];

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllProducts() {
    this.productService.getProduct().subscribe((res: any) => {
      this.productList = res.data;
    })
  }
  getAllCategory() {
    this.productService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  }


}
