import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
  private films = new BehaviorSubject<any>([])
  film = this.films.asObservable()

  constructor() { }

  changeFilmes(film) {
    this.films.next(film);
  }


}
