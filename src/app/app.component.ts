import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter,Output, Input, AfterViewInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router'
import {faGithubAlt, faGitAlt, faGithub,faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faBars, faCodeBranch, faTimes} from '@fortawesome/free-solid-svg-icons'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';

  faBars = faBars;
  faGithubAlt = faGithubAlt;
  faCodeBranch = faCodeBranch;
  faGitAlt = faGitAlt;
  faGithub = faGithub;
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;
  faTimes = faTimes;
  
  // constructor() { }


  

  constructor(private modalService: NgbModal, private router: Router) {}

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();

  closeModal( $event ) {
    this.router.navigate([{outlets: {contact: null}}]);
    this.modalClose.next($event);
  }
 
  openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
  }





}
