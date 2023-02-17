import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppComponent,
                children: [

                    {
                        path: '',
                        loadChildren: () => import('./demo/eticaret/component/loginboard/loginpage.module').then(m => m.LoginpageModule)
                    },
                    {
                        path: 'eticaretdashboard',
                        loadChildren: () => import('./demo/eticaret/component/dashboard/eticaretdashboard.module').then(m => m.EticaretdashboardModule)
                    },
                    {
                        path: 'admin',
                        loadChildren: () => import('./demo/eticaret/component/adminpage/adminpage.module').then(m => m.AdminpageModule)
                    },
                    {
                        path: 'eticaretdashboard/shop',
                        loadChildren: () => import('./demo/eticaret/component/shopping/shop.module').then(m => m.ShopModule)
                    },

                    {
                        path: 'p',
                        loadChildren: () => import('./demo/custom/parent/parent.module').then(m => m.ParentModule)
                    }

                ]
            },

        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
