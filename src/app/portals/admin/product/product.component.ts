import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  isSidePanelVisible: boolean = false;
  productObj: any = {
    "productId": 0,
    "productSku": '',
    "productName": '',
    "productPrice": 0,
    "productShortName": '',
    "productDescription": '',
    "createdDate": new Date(),
    "deliveryTimeSpan": '',
    "categoryId": 0,
    "productImageUrl": ''
  }

  categoryList: any[] = [];
  productList: any[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
  }

  onSave() {
    this.productService.createProduct(this.productObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product Created');
        this.getAllProducts();
      }
      else alert("Error: " + res.message);
    });
  }

  onUpdate() {
    this.productService.updateProduct(this.productObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product Updated');
        this.getAllProducts();
      }
      else alert("Error: " + res.message);
    });
  }

  onEdit(product: any) {
    this.productObj = product;
    this.openSidePanel();
  }

  onDelete(product: any) {
    const isConfirm = confirm('Are you sure you want to delete this product');
    if (isConfirm) {
      this.productService.deleteProduct(product.productId).subscribe((res: any) => {
        if (res.result) {
          alert('Product Deleted');
          this.getAllProducts();
        }
        else alert("Error: " + res.message);
      });
    }

  }

  getAllCategory() {
    this.productService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  getAllProducts() {
    this.productService.getProduct().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

}
