import { Carta } from './carta';
import { Component, OnInit } from '@angular/core';
import listadoCartas from 'src/assets/listadoCartas.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  
  title!: "memo-game";
  cartas: Array<Carta> = [];
  filtroDeCartas: Array<Carta> = [];
  movimientos: number =0;
  primeraCarta: Carta = {id:0,urlImagen: "",estado: ""}
  aciertos: number =0;
  nivelElegido: number =1;
  juegoCompletado = false;
  cantColumnas: number = 2;
  
  constructor() {
  }
  
  ngOnInit(): void {
    this.cartas = this.mezclarCartas(listadoCartas.filter(cart => cart.id<=4));
    this.cantColumnas = 2;
    this.movimientos =0;
    this.aciertos=0;
    this.juegoCompletado = false;
  }

  public reiniciarJuego(){
      this.cartas.map(cart => cart.estado="escondido")
      this.movimientos =0;
      this.aciertos=0;
      this.juegoCompletado = false;
      if(this.nivelElegido===1){
        this.cartas = this.mezclarCartas(listadoCartas.filter(cart => cart.id<=4));
        this.cantColumnas = 2;
      }
      if(this.nivelElegido===2){
        this.cartas = this.mezclarCartas(listadoCartas.filter(cart => cart.id<=6));
        this.cantColumnas = 3;
      }
      if(this.nivelElegido===3){
        this.cartas = this.mezclarCartas(listadoCartas.filter(cart => cart.id<=8));
        this.cantColumnas = 4;
      }
      if(this.nivelElegido===4){
        this.cartas = this.mezclarCartas(listadoCartas.filter(cart => cart.id<=12));
        this.cantColumnas = 4;
      }
      if(this.nivelElegido===5){
        this.cartas = this.mezclarCartas(listadoCartas.filter(cart => cart.id<=20));
        this.cantColumnas = 4;
      }
      
  }

  public async girarCarta(cartaElegida: Carta){
    
      //mostrar carta
      this.movimientos++;
      cartaElegida.estado="visible";

      //verificar que sea la primera o segundo seleccionada
      if (this.movimientos%2!==0){
          this.primeraCarta=cartaElegida;
      }else{
          this.compararCartas(this.primeraCarta, cartaElegida);
          setTimeout(() => {
            this.aciertos===(this.cartas.length/2) ? this.juegoCompletado=true : console.log("SEGUI JUGANDO..");
          }, 3000);   
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
        }, 2000);
    }else{
         this.aciertos++;
    }
  }

  public cambiarNivel(nivel: number ){
      this.nivelElegido= nivel;
      this.reiniciarJuego();
  }

}
