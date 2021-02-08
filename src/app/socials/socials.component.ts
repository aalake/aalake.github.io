import { Component, OnInit } from '@angular/core';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
/*import { faFacebook } from '@fortawesome/free-brands-svg-icons';*/
/*import { faBath } from '@fortawesome/free-solid-svg-icons';*/
 //import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
 import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'; 


@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;

  
  constructor() { }

  ngOnInit(): void {
  }

}
