import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

class Film{
  constructor( name:string , duration:number){}
}
@Injectable()
export class DataService {
  text: Film = new Film("asadk", 0)

  filmSet: Film[] = []

  private _films = new BehaviorSubject<any>([])
  films = this._films.asObservable()

  totalDuration: number
  // _value: number
  // private _totalDuratition = new BehaviorSubject<number>(this._value)
  // totalDuratition = this._totalDuratition.asObservable

  constructor() {
    console.log('constructor')
  }
  
  changeFilm(films) {
    this._films.next(films);
  }

  addFilm(film: Film){
    this.filmSet.push(film);
    this._films.next(this.filmSet);
  }

  // updateTime(addTime=0, plus=false){
  //    (plus) ? this._totalDuratition. += addTime : this._totalDuratition -= addTime
  // }

}
