import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
    standalone: true,  // <- aquí

  imports: [
    FormsModule, CommonModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  ///para extraer los datos
  username: string ='';
  password: string ='';
  errorMsg: string = ''; 

  constructor(private router: Router, private authService: AuthService) {}

  login(){
      this.authService.login(this.username, this.password).subscribe({
      next: (res: any) => {
        console.log('Login OK:', res);
        localStorage.setItem('usuarioLogueado', this.username);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMsg = 'Credenciales incorrectas';
      }
    });
    }
}
