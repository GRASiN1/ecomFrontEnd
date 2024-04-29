import { Routes } from '@angular/router';
import { LoginComponent } from './portals/admin/login/login.component';
import { LayoutComponent } from './portals/admin/layout/layout.component';
import { ProductComponent } from './portals/admin/product/product.component';
import { CategoriesComponent } from './portals/admin/categories/categories.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Admin Login',
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
