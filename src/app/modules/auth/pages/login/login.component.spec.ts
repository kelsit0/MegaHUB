import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy:jasmine.SpyObj<Router>;


  beforeEach(async () => {
    routerSpy=jasmine.createSpyObj('Router' ,['navigate'])
    await TestBed.configureTestingModule({
      imports: [LoginComponent, CommonModule],
      providers: [{provide:Router, useValue:routerSpy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de loguearse con las credenciales correctas', ()=>{
    component.username='admin';
    component.password='1234';
    component.login();
    
    expect(localStorage.getItem('usuarioLogueado')).toBe('admin');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  })


  
  it('deberia de haber un error por credenciales invalidas',()=>{
    component.username='noAdmin';
    component.password='4321';
    component.login();

    expect(component.errorMsg).toBe('Credenciales incorrectas');
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  })
  


});
