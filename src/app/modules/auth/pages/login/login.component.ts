import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  ///para extraer los datos
  username: string ='';
  password: string ='';
  errorMsg: string = ''; 

  constructor(private router: Router) {}

  login(){
    if(this.username=== 'admin' && this.password==='1234' ){

      localStorage.setItem('usuarioLogueado',this.username);
      this.router.navigate(['/home']);
      
    }else{
      ///error aunq mucho sentido no tiene
      this.errorMsg = 'Credenciales incorrectas';

    }
    }
}
