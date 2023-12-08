import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multas-registradas',
  templateUrl: './multas-registradas.page.html',
  styleUrls: ['./multas-registradas.page.scss'],
})
export class MultasRegistradasPage {

  dataArray: any[];
  expandedCard: any;

  constructor(private router: Router) { 
    const dataString = localStorage.getItem('data');
    if (dataString) {
      this.dataArray = JSON.parse(dataString);
    } else {
      this.dataArray = [];
    }
  }

  expandCard(data: any) {
    this.expandedCard = data;
  }
  registrar() {
    this.router.navigate(['/aplicar-multa']); 
  }



  
  

}
