import { Injectable } from '@angular/core';
import { ContentModel } from '../core/models/content.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites:ContentModel[]=[];

  getFavorites(): ContentModel[]{
    return this.favorites;
  }
  
  addFavorites(content:ContentModel): void{
    const exists = this.favorites.some(f => f.titulo === content.titulo);
    if (!exists) {
      this.favorites.push(content);
    }
  }

  constructor() { }
}
