import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:blue;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";

  apellido="Díaz";

  edad="21";

  empresa="Píldoras Informáticas";

  constructor() { }

  ngOnInit(): void {
  }

}
