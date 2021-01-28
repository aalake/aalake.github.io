import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter,Output, Input, AfterViewInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router) { }

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();

 
    
  closeModal( $event ) {
    this.router.navigate([{outlets: {contact: null}}]);
    this.modalClose.next($event);
  }

 
openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
}





  ngOnInit(): void {
  }

}
