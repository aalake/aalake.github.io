import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
/*import { faFacebook } from '@fortawesome/free-brands-svg-icons';*/
/*import { faBath } from '@fortawesome/free-solid-svg-icons';*/
 //import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
 import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
 import {faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  /*faTwitter = faTwitter;*/
  /*faFacebook = faFacebook;*/
  faGithub = faGithub;
  faLinkedin = faLinkedinIn;
  faEnvelope = faEnvelope;
  faFileAlt = faFileAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

}
