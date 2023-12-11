import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  usuario: string = "";
  clave: string = "";
  accesoPermitido: boolean = false;

  constructor(private router: Router) {}

  validarAcceso() {
    if (this.usuario === 'AgenteAdmin' && this.clave === '1234') {
      this.router.navigate(['/aplicar-multa']); 
    } else {
      alert('Acceso denegado. Verifica tus credenciales.');
    }
  }
  
}