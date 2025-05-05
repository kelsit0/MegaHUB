import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit "pelicula" and navigate to /home', () => {
    spyOn(component.tipoSeleccionado, 'emit');
    const navigateSpy = spyOn(router, 'navigate');

    component.seleccionar('pelicula');

    expect(component.tipoSeleccionado.emit).toHaveBeenCalledWith('pelicula');
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });

  it('should navigate to favorites when verFav is called', () => {
    const navigateSpy = spyOn(router, 'navigate');
    
    component.verFav();

    expect(navigateSpy).toHaveBeenCalledWith(['favorites']);
  });
});
