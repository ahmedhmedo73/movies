import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cats:string[] = ['Your Amazon.eg','Todays Deals','Sell','Help','Fashion','Grocery','Perfumes','Mobile Phones' ,'Electronics','Appliances'];
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
