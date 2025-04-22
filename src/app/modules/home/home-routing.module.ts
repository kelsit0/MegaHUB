import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentDetailComponent } from './pages/content-detail/content-detail.component';

///rutas para despues
const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
    children:[
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
