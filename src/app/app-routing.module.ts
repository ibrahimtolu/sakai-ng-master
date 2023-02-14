import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./demo/custom/anasayfa/anasayfa.module').then(m => m.AnasayfaModule)
                    },
                    {
                        path: 'disp',
                        loadChildren: () => import('./demo/custom/dispatcpackage/disp.module').then(m => m.DispModule)
                    },
                    {
                        path: 'parent',
                        loadChildren: () => import('./demo/custom/parent/parent.module').then(m => m.ParentModule)
                    },
                    {
                        path: 'treeevent',
                        loadChildren: () => import('./demo/custom/treeevent/treeevent.module').then(m => m.TreeeventModule)
                    },
                    {
                        path: 'home',
                        loadChildren: () => import('./demo/custom/home/home.module').then(m => m.HomeModule)
                    },
                    {
                        path: 'name',
                        loadChildren: () => import('./demo/custom/name/name.module').then(m => m.NameModule)
                    },
                    {
                        path: 'anasayfa',
                        loadChildren: () => import('./demo/custom/anasayfa/anasayfa.module').then(m => m.AnasayfaModule)
                    },
                    {
                        path: 'about',
                        loadChildren: () => import('./demo/custom/about/about.module').then(m => m.AboutModule)
                    },
                    {
                        path: 'hakkinda',
                        loadChildren: () => import('./demo/custom/hakkinda/hakkinda.module').then(m => m.HakkindaModule)
                    },
                    {
                        path: 'uikit',
                        loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule)
                    },
                    {
                        path: 'utilities',
                        loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule)
                    },
                    {
                        path: 'documentation',
                        loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule)
                    },
                    {
                        path: 'blocks',
                        loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)
                    },
                    {
                        path: 'pages',
                        loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule)
                    }
                ]
            },
            {path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule)},
            {
                path: 'landing',
                loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule)
            },
            {path: 'notfound', component: NotfoundComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
