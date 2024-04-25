import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

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

  navigateToProducts(id: any) {
    this.router.navigate(['/product', id]);
  }
}
