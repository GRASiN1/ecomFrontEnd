import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(constant.API_END_POINT + constant.METHOD.GET_ALL_CATEGORY);
  }
  getProduct() {
    return this.http.get(constant.API_END_POINT + constant.METHOD.GET_ALL_PRODUCT);
  }

  getProductByCategoryId(id: any) {
    return this.http.get(constant.API_END_POINT + constant.METHOD.GET_PRODUCT_BY_CATEGORY_ID + id);
  }

  createProduct(obj: any) {
    return this.http.post(constant.API_END_POINT + constant.METHOD.CREATE_PRODUCT, obj);
  }

  updateProduct(obj: any) {
    return this.http.post(constant.API_END_POINT + constant.METHOD.UPDATE_PRODUCT, obj);
  }

  deleteProduct(id: any) {
    return this.http.get(constant.API_END_POINT + constant.METHOD.DELETE_PRODUCT + id);
  }
}
