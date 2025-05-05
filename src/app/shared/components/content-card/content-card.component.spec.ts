import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardComponent } from './content-card.component';
import { Router } from '@angular/router';
import { FavoritesService } from '../../../services/favorites.service';
import { ContentModel } from '../../../core/models/content.model';

describe('ContentCardComponent', () => {
  let component: ContentCardComponent;
  let fixture: ComponentFixture<ContentCardComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockFavoritesService: jasmine.SpyObj<FavoritesService>;

  const mockContent: ContentModel = {
    titulo: 'Breaking Bad',
    ruta_imagen: 'breakingbad.jpg',
    descripcion: 'Un profesor de química se convierte en fabricante de metanfetamina',
    tipo: 'serie'
  };

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockFavoritesService = jasmine.createSpyObj('FavoritesService', ['addFavorites']);

    await TestBed.configureTestingModule({
      imports: [ContentCardComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: FavoritesService, useValue: mockFavoritesService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentCardComponent);
    component = fixture.componentInstance;
    component.content = mockContent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar los datos del contenido', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Breaking Bad');
    expect(compiled.querySelector('p')?.textContent).toContain('Un profesor de química');
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe('breakingbad.jpg');
  });

  it('debería llamar al router al ejecutar verDetalles()', () => {
    component.verDetalles();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['detail/', encodeURIComponent(mockContent.titulo)]);
  });

  it('debería llamar a favoritesService al guardar contenido', () => {
    component.guardarContenido();
    expect(mockFavoritesService.addFavorites).toHaveBeenCalledWith(mockContent);
  });
});