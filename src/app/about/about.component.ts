import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from "@angular/router";
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  filmes: any
  constructor(private route : ActivatedRoute, private router: Router, private mData : DataService) { 
    this.route.params.subscribe(res => console.log(res.id))
  }
  
  ngOnInit() {
    this.mData.film.subscribe(res => this.filmes = res)
  }
  
  sendMeHome(){
    this.router.navigate([''])
  }
}
