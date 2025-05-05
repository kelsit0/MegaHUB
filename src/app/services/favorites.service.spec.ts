import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { ContentModel } from '../core/models/content.model';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    service = new FavoritesService();
  });

  it('Deberia aniadir un favorito', ()=>{
    const content: ContentModel = {
      titulo: "La Casa de Papel",
      ruta_imagen: "lacasadepapel.webp",
      descripcion: "Un grupo de ladrones planea el atraco perfecto en la Fábrica de Moneda",
      tipo: "serie"
      }

    service.addFavorites(content);
    expect(service.getFavorites().length).toBe(1);
    expect(service.getFavorites()[0].titulo).toBe('La Casa de Papel')
  });

  it('should not add duplicate content', () => {
    const content: ContentModel = {
    titulo: "La Casa de Papel",
    ruta_imagen: "lacasadepapel.webp",
    descripcion: "Un grupo de ladrones planea el atraco perfecto en la Fábrica de Moneda",
    tipo: "serie"
    }
    service.addFavorites(content);
    service.addFavorites(content);
    expect(service.getFavorites().length).toBe(1);
  });
});
