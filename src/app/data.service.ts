import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

class Film{
  constructor( name:string , duration:number){}
}
@Injectable()
export class DataService {
  texte: Film = new Film("asadk", 0)

  private _films = new BehaviorSubject<any>([])
  films = this._films.asObservable()
  totalDuration: number
  // _value: number
  // private _totalDuratition = new BehaviorSubject<number>(this._value)
  // totalDuratition = this._totalDuratition.asObservable

  constructor() { }
  
  changeFilm(films) {
    this._films.next(films);
  }

  // updateTime(addTime=0, plus=false){
  //    (plus) ? this._totalDuratition. += addTime : this._totalDuratition -= addTime
  // }

}
