import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { ContentDetailComponent } from './content-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('ContentDetailComponent', () => {
  let component: ContentDetailComponent;
  let fixture: ComponentFixture<ContentDetailComponent>;
  let mockRouter: jasmine.SpyObj<Location>;


  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => encodeURIComponent('La Casa de Papel') // Simula que viene en la URL
      }
    }
  };
  let mockLocation = jasmine.createSpyObj<Location>('Location', ['back']);

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ContentDetailComponent, CommonModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar el contenido desde el parámetro de la URL', () => {
    expect(component.content).toBeDefined();
    expect(component.content?.titulo).toBe('La Casa de Papel');
  });

  it('debería renderizar los datos en el template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('La Casa de Papel');
    expect(compiled.querySelector('p')?.textContent).toContain('Un grupo de ladrones');
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe('lacasadepapel.webp');
  });

  it('debería volver a la ruta anterior al hacer click en volver()', () => {
    component.volver();
    expect(mockLocation.back).toHaveBeenCalledWith();
  });
});