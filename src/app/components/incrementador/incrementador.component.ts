import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  
  @Input() progreso: number = 50;
  @Input() leyenda: String = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log(this.leyenda);
   }

  ngOnInit() {
    console.log(this.leyenda);
  }

  cambiarValor(valor){
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
  }

}
