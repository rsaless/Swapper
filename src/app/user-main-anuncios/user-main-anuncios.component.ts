import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anuncios } from '../anuncios';
import { Propostas } from '../propostas';
import { User } from '../user';


@Component({
  selector: 'app-user-main-anuncios',
  templateUrl: './user-main-anuncios.component.html',
  styleUrls: ['./user-main-anuncios.component.css']
})
export class UserMainAnunciosComponent implements OnInit {
 
  usuarioLogado:User = JSON.parse(localStorage.getItem('user'));
  anuncios:Anuncios[] = [];
  propostas:Propostas[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<Anuncios[]>("http://localhost:3000/user/" + this.usuarioLogado.id +"/anuncios")
      .subscribe( res => {
        this.anuncios = res;
        console.log(res);
      })
  }

  getOfertas(id){
    this.http.get<Propostas[]>("http://localhost:3000/anuncio/"+ id +"/propostas/recebidas")
    .subscribe( ofertasApi => {
      this.propostas = ofertasApi;
    })
  }
}
