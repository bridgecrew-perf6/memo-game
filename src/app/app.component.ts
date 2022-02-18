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

  public girarCarta(cartaElegida: Carta){
      this.movimientos++;
      cartaElegida.estado="visible";
      if (this.movimientos%2!==0){
          this.primeraCarta=cartaElegida;
      }else{
        if (this.primeraCarta.urlImagen!==cartaElegida.urlImagen){
             setTimeout(() => {
              cartaElegida.estado= "escondido"
              this.cartas.map(carta =>{
                carta.id===this.primeraCarta.id ? carta.estado = "escondido": "";
              })
            }, 1000);
        }else{
          this.aciertos++;
        }
      }

      this.aciertos===(this.cartas.length/2) ? alert("GANASTE..") : console.log("SEGUI JUGANDO..");
  }

  public mezclarCartas(misCartas: Array<Carta>): Array<Carta>{
      return misCartas.sort(()=> Math.random() - 0.5);
  }
  
}
