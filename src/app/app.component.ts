import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {

  public emailContacto: string;
  title = 'NGZOO';

  ngDoCheck() {
    // Despues de OnInit y del Changes
    // console.log('El DoCheck ejecutado');
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
    // console.log(localStorage.getItem('emailContacto'));
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
