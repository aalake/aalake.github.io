import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomeprofile',
  templateUrl: './welcomeprofile.component.html',
  styleUrls: ['./welcomeprofile.component.css']
})
export class WelcomeprofileComponent implements OnInit {

  myimage: string = "assets/images/IMG_9021.jpg";
  twoimage: string = "assets/images/IMG_2.JPG"

  constructor() {}

  ngOnInit(): void {
  }

}
