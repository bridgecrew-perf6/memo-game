import { Component, OnInit,HostBinding } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-conecta-cuatro',
  templateUrl: './conecta-cuatro.component.html',
  styleUrls: ['./conecta-cuatro.component.scss']
})
export class ConectaCuatroComponent implements OnInit {

  items: number[] = []
  usuarioActivo: number = 1;
  numerosDeJugadas: number = 1;
  ganadorEncontrado: number = 0;
  resultados: number[] = [0,0,0]

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.numerosDeJugadas = 1;
    this.ganadorEncontrado = 0;
    this.usuarioActivo = 1;
    this.cargarArray();
  }

  reinciarJuego(){
    this.items = this.items.map(val=> val=0)
    this.numerosDeJugadas = 1;
    this.ganadorEncontrado = 0;
    this.usuarioActivo = 1;
  }

  reiniciarContador(){
    this.resultados = [0,0,0]
    this.reinciarJuego();
  }

  cargarArray(){
      for(let i=1; i<=42; i++){
        this.items.push(0)
      }
  }

  ponerFicha(i: number, item: number){
    let aux = i+7;
    while(aux <42){
        if (this.items[aux]==0){
            i=aux
        }
        aux=aux+7
    }

    if (item==0){
      this.numerosDeJugadas++;
      
      this.items[i] = this.usuarioActivo;

      this.comprobarResultados(this.usuarioActivo)
      this.numerosDeJugadas%2 ? this.usuarioActivo=1 : this.usuarioActivo=2
    }
    else{
      this.snackBar.open('Ficha ya asignada, seleccione otra!!', 'Close', {duration: 2000})
    }
  }

  comprobarResultados(jugador: number){
      this.controlFilas(jugador)
      this.controlColumna(jugador)
      this.controlDiagonales(jugador)
  }

  controlFilas(jugador: number){
    let contador = 0;
    let cantidad = 0;
    for (let us of this.items) {
        if(cantidad%7==0){
            contador=0
        }
        if(jugador==us){
            contador++;
            if(contador==4){
                this.ganadorEncontrado=jugador;
                this.resultados[jugador]++
            }
        }else{
          contador=0
        }
        cantidad++;
    }
  }

  controlColumna(jugador: number){
    let contador = 0;
    let cantidad = 0;
    for(let i=0; i<7;i++){
      contador = 0;
      for(let aux=i; aux<42; aux=aux+7){
        if(cantidad%6==0){
            contador=0
        }
        if(jugador==this.items[aux]){
            contador++;
            if(contador==4){
              this.ganadorEncontrado=jugador;
              this.resultados[jugador]++
            }
        }else{
          contador=0
        }
        cantidad++;
      }
    }
  }
  
  
  controlDiagonales(jugador: number){
    let arrDiagonal = ['0 8 16 24 32 40',
                      '1 9 17 25 33 41', 
                      '2 10 18 26 34', 
                      '3 11 19 27',
                      '7 15 23 31 39',
                      '14 22 30 38',
                      '21 15 9 3',
                      '22 16 10 4', 
                      '35 29 23 17 11 5', 
                      '36 30 24 18 12 6',
                      '37 31 25 19 13',
                      '38 32 26 20'
                      ]
     for(let arr of arrDiagonal){
       let arrNum = arr.split(' ')
       let contador = 0;
       for(let num of arrNum){
          if(jugador== this.items[Number(num)]){
            contador++
            if(contador==4){
              this.ganadorEncontrado=jugador;
              this.resultados[jugador]++
            }
        }else{
          contador=0
        }
       }
     }                 
  
  }

}