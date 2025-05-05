import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
   
   {
      path:'',
      loadChildren:() => import('./modules/auth/auth.module').then(m=>m.AuthModule)
   },
   {
      path: '',
      component: MainLayoutComponent,
      children: [
        {
          path: 'home',
          loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'favorites',
          loadComponent: () => import('./modules/home/pages/favorites-page/favorites-page.component').then(m => m.FavoritesPageComponent)
        },
        {
          path: 'detail/:title',
          loadComponent: () => import('./modules/home/pages/content-detail/content-detail.component').then(m => m.ContentDetailComponent)
        }
      ]
    }
];
