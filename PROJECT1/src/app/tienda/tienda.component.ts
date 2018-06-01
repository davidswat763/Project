import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo: String;
  public nombreDelParque: String;
  public miParque;

  constructor() { 
    this.titulo = "Esta es la Tienda Angular";
  }

  ngOnInit() {
  }

  mostrarNombre(){
    // console.log(this.nombreDelParque);
  }
  verDatosParque(event){
    console.log(event);
    this.miParque = event;
  }

}
