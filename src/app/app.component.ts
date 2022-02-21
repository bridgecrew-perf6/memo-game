import { Carta } from './carta';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import listadoCartas from 'src/assets/misDatos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{ 
 
  cartas: Array<Carta> = [];
  movimientos: number =0;
  primeraCarta: Carta = {id:"",urlImagen: "",estado: ""}
  aciertos: number =0;
  
  constructor() {
  }
  
  ngOnInit(): void {
    this.cartas = this.mezclarCartas(listadoCartas);
    this.movimientos =0;
    this.aciertos=0;
  }

  public reiniciarJuego(){
      this.cartas.map(cart => cart.estado="escondido")
      this.movimientos =0;
      this.aciertos=0;
      this.cartas = this.mezclarCartas(listadoCartas);
  }

  public async girarCarta(cartaElegida: Carta){
      //mostrar carta
      this.movimientos++;
      cartaElegida.estado="visible";

      //verificar que sea la primera o segundo seleccionada
      if (this.movimientos%2!==0){
          this.primeraCarta=cartaElegida;
      }else{
          await this.compararCartas(this.primeraCarta, cartaElegida);
          setTimeout(() => {
            this.aciertos===(this.cartas.length/2) ? alert("GANASTE..") : console.log("SEGUI JUGANDO..");
          }, 2000);   
      }   
  }


  public mezclarCartas(misCartas: Array<Carta>): Array<Carta>{
      return misCartas.sort(()=> Math.random() - 0.5);
  }

  public compararCartas(carta1: Carta, carta2: Carta){
    if (carta1.urlImagen!==carta2.urlImagen){
        setTimeout(() => {
          carta2.estado= "escondido"
          this.cartas.map(carta =>{
            carta.id===carta1.id ? carta.estado = "escondido": "";
          })
        }, 1000);
    }else{
         this.aciertos++;
    }
  }
  
}
