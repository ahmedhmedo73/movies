import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {
  @Input() trendingMovies:any=[];
  imgSrc:string = "https://image.tmdb.org/t/p/w200/";
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  constructor() {}
   

  ngOnInit(): void {
  }

}
