import { RedirectCommand, Router, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { inject } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductListComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [() => {
            const router = inject(Router);
            const urlTree = router.parseUrl('/login');
            return new RedirectCommand(urlTree, {
                skipLocationChange: true,
                state: {
                    needsLogin: true
                },
            });
        }]
    }
];
