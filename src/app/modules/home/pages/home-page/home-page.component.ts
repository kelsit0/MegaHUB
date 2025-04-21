import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';
import { ContentListComponent } from '../../../../shared/components/content-list/content-list.component';
import dataRaw from '../../../../data/movies.json';
import { ContentModel } from '../../../../core/models/content.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavBarComponent,  
    ContentListComponent,
    RouterOutlet
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public allContents: ContentModel[] = [];
  public filteredContents: ContentModel[] = [];
  public tipoSeleccionado: 'pelicula' | 'serie' = 'pelicula';

  ngOnInit(): void {
    this.allContents = dataRaw as ContentModel[];
    console.log(this.allContents)
    this.filtrarContenido();
  }

  cambiarTipo(tipo: 'pelicula' | 'serie') {
    this.tipoSeleccionado = tipo;
    this.filtrarContenido();
  }

  private filtrarContenido(): void {
    this.filteredContents = this.allContents.filter(
      (item) => item.tipo === this.tipoSeleccionado
    );
  }
}
