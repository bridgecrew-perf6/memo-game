import { Carta } from './carta';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import listadoCartas1 from 'src/assets/nivel1.json';
import listadoCartas2 from 'src/assets/nivel2.json';
import listadoCartas3 from 'src/assets/nivel3.json';

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
  nivelElegido: number =1;
  juegoCompletado = false;
  
  constructor() {
  }
  
  ngOnInit(): void {
    this.cartas = this.mezclarCartas(listadoCartas1);
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
        this.cartas = this.mezclarCartas(listadoCartas1);
      }
      if(this.nivelElegido===2){
        this.cartas = this.mezclarCartas(listadoCartas2);
      }
      if(this.nivelElegido===3){
        this.cartas = this.mezclarCartas(listadoCartas3);
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
          await this.compararCartas(this.primeraCarta, cartaElegida);
          setTimeout(() => {
            this.aciertos===(this.cartas.length/2) ? this.juegoCompletado=true : console.log("SEGUI JUGANDO..");
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

  public cambiarNivel(nivel: number ){
      this.nivelElegido= nivel;
      this.reiniciarJuego();
  }
  
}
