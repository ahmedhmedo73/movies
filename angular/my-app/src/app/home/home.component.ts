import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutUsers:any = [];
  movies:any[] = [];
  imgSrc:string = "https://image.tmdb.org/t/p/w200/";
  constructor(_UsersService:UsersService) {
    this.aboutUsers = _UsersService.users;
    _UsersService.getTrending().subscribe((data)=>{
      this.movies = data.results;
    });
  }
  ngOnInit(): void {
  }

name = "ahmed"
x= ''
onSale = false;
welcome (e:any){
  console.log(e);
}

}