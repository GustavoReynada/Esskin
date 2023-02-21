import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  public image:string="assets/B.png";
  public Titulo:string="Esskin Cabina Profesional de Thairi"
  constructor(){}

  ngOnInit(): void{

  }

}
