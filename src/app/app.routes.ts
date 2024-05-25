import { ActivatedRouteSnapshot, RedirectCommand, Router, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { inject } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RedirectToLoginState } from './data/redirect-to-login-state';

export const routes: Routes = [
    {
        path: '',
        redirectTo: () => {
            const router = inject(Router);
            // return 'products' // Alternative
            return router.parseUrl('/products');
        },
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
        canActivate: [(destination: ActivatedRouteSnapshot) => {
            const router = inject(Router);
            const auth = inject(AuthService);
            
            if (auth.isAuth()) {
                return true;
            }

            const afterLoginRedirect = destination.url.join('/');
            const urlTree = router.parseUrl('/login');

            return new RedirectCommand(urlTree, {
                // skipLocationChange: true,
                state: {
                    needsLogin: true,
                    afterLoginRedirect: afterLoginRedirect
                } as RedirectToLoginState,
            });
        }]
    }
];
