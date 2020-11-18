import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from'@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from  '@angular/forms'; /* Import this after importing FormsModule and ReactiveFormsModule in app.module.ts */

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  faPaperPlane = faPaperPlane;
  contactForm: FormGroup;

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: ['']
    });
  }


  constructor(private formBuilder: FormBuilder) { 
    this.createContactForm() 
  }
  
  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );
}


  ngOnInit(): void {
  }

}
