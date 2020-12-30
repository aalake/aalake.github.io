import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {

  myimage: string = "assets/images/IMG_9021.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
