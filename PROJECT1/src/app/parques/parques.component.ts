import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnChanges, OnInit, DoCheck {
  @Input() nombre: String;
  @Input('metros_cuadrados') metros: number;
  public vegetacion: String;
  public abierto: Boolean;

  // Poder emitir enventos para ejecutarlos afuera
  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque Natural';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  // Se actualiza cuando modificamos los valores o hay cambios en el componente
  ngOnChanges(Changes: SimpleChanges) {
    // console.log(Changes);
    console.log('Existen Cambios en las Propiedades');
  }
  // Se ejecuta cuando cargamos la directiva del Componente, es el primer metodo que se ejecuta despues del constructor
  ngOnInit() {
    // Se ejecuta una vez
    console.log('Metodo OnInit Lanzado');
  }
  ngDoCheck() {
    //Despues de OnInit y del Changes
    console.log('El DoCheck ejecutado');
  }

  emitirEvento() {
    // Se crea un evento Completo "como un evento clic"
    this.pasameLosDatos.emit({
      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto,
    })
  }

}
