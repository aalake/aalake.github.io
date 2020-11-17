import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from'@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  faPaperPlane = faPaperPlane;

  ngOnInit(): void {
  }

}
