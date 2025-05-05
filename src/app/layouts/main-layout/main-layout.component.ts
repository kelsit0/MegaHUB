import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { ContentFilterService } from '../../services/content-filter.service';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    NavBarComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  constructor(private filterService:ContentFilterService){

  }

  cambiarTipo(tipo:'pelicula'| 'serie'){
    this.filterService.setTipo(tipo)
  }

}
