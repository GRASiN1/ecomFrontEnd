import { Routes } from '@angular/router';
import { LoginComponent } from './portals/admin/login/login.component';
import { LayoutComponent } from './portals/admin/layout/layout.component';
import { ProductComponent } from './portals/admin/product/product.component';
import { CategoriesComponent } from './portals/admin/categories/categories.component';
import { LandingComponent } from './portals/customer/landing/landing.component';
import { CategoryProductsComponent } from './portals/customer/category-products/category-products.component';
import { ProductssComponent } from './portals/customer/productss/productss.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'shop', pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Admin Login',
    },
    {
        path: '',
        component: LandingComponent,
        children: [
            {
                path: 'shop',
                component: ProductssComponent
            },
            {
                path: 'product/:id',
                component: CategoryProductsComponent,
            },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'product',
                component: ProductComponent,
                title: 'Home',
            },
            {
                path: 'category',
                component: CategoriesComponent,
                title: 'Category',
            },

        ]
    }
];
