import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path:'home',
    loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule
        
    )
   },
   {
      path:'',
      loadChildren:() => import('./modules/auth/auth.module').then(m=>m.AuthModule)
   },
   {
      path:'detail/:title',
      loadComponent:() => import('./modules/home/pages/content-detail/content-detail.component').then(m=>m.ContentDetailComponent)
   },
   {
      path:'favorites',
      loadComponent:()=>import('./modules/home/pages/favorites-page/favorites-page.component').then(m => m.FavoritesPageComponent)
         
     
   }
];
