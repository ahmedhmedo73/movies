import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    $(".phones").slideUp();
    $(".accessories").slideUp();

  }
  mouseOverPhones(){
    this.mouseLeaveAccessories();
    $(".phones").slideDown();
    $('.navbar').css('box-shadow','0px 5px 5px 0px rgba(0, 0, 0, 0.04)');    
  }
  mouseLeavePhones(){
    $(".phones").slideUp();
    $('.navbar').css('box-shadow','0px 5px 5px 0px rgba(0, 0, 0, 0)');
  }
  mouseOverAccessories(){
    this.mouseLeavePhones();
    $(".accessories").slideDown();
    $('.navbar').css('box-shadow','0px 5px 5px 0px rgba(0, 0, 0, 0.04)');    
  }
  mouseLeaveAccessories(){
    $(".accessories").slideUp();
    $('.navbar').css('box-shadow','0px 5px 5px 0px rgba(0, 0, 0, 0)');
  }
}
