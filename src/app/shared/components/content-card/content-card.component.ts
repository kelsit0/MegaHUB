import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModel } from '../../../core/models/content.model';
import { Router } from '@angular/router';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content!: ContentModel;

  public favoriteContent: ContentModel[] = [];

  constructor(private router:Router, private favoritesService:FavoritesService){

  }

  verDetalles():void {
    ///enviamos el titulo encodeado a la ruta de detalle
    const title = encodeURIComponent(this.content.titulo)
    this.router.navigate(['detail/',title]);
  }

  guardarContenido():void{
    this.favoritesService.addFavorites(this.content);
    console.log("guardado")
  }
}
