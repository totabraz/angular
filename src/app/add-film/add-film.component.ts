import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'
import { DataService } from "../data.service";

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss'],
  animations:[
    trigger('films', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
      
        query(':enter', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({ opacity:  0, transform: 'translateY(-75%)', offset:   0}), 
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}), 
            style({ opacity:  1, transform:    'translateY(0)', offset:   1}), 
            ]))]), {optional: true}),
        
        query(':leave', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({ opacity:  1, transform: 'translateY(0)', offset:   0}), 
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}), 
            style({ opacity:  0, transform:    'translateY(-75%)', offset:   1}), 
            ]))]), {optional: true}),
      ])
    ]),
  ]
})
export class AddFilmComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add filme";
  filmNameText: string = null
  filmDurationText: number = null
  totalDuration: number = 0
  films = []

  
  constructor(private mData : DataService) { }
  
  ngOnInit() {
    this.mData.film.subscribe(res => this.films = res);
    this.mData.changeFilmes(this.films)
    this.itemCount = this.films.length;
  }   

  private resetInputs(){
    this.filmNameText = null
    this.filmDurationText = null
  }

  addItem() {
    if (this.filmNameText != null && this.filmDurationText != null) {
      let film = {
        name: null,
        duration: null,
      }
      film.name = this.filmNameText
      film.duration = this.filmDurationText
      this.films.push(film)
      this.itemCount = this.films.length
      this.mData.changeFilmes(this.films)
      this.totalDuration += film.duration;
      this.resetInputs()
    }
  }

  removeItem(i){
    this.totalDuration -= this.films[i].duration;
    this.films.splice(i,1)
    this.itemCount = this.films.length
    this.mData.changeFilmes(this.films)
  }
  
}
