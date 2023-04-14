import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public nomeProduto: string = "Curso Angular";
  anuncio: string = `O  ${this.nomeProduto} está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;

  constructor() {
   // this.anuncio = 'O' + this.nomeProduto + 'está em promoção';
   console.log('Nome do Produto', this.nomeProduto);
   console.log('Anuncio', this.anuncio);
   console.log('Id', this.precoProduto);
   console.log('Promoção', this.promocao);

  }
}
