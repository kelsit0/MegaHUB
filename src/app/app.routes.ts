import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
   {
    path:'',
    loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule
        
    )
   }
];
