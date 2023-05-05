import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nomeProduto: string = "Curso Angular";
  anuncio: string = `O  ${this.nomeProduto} está em promoção`;
  <p class = "card-text"> Identificação: {{idProduto| number = '2.0-3'}} </p>
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png'

  constructor() {
   // this.anuncio = 'O' + this.nomeProduto + 'está em promoção';
console.log("Nome do Produto", this.nomeProduto);
  }
  ngOnInit(): void{}
}
