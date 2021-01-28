import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from'@fortawesome/free-solid-svg-icons';
import { faCoffee } from'@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from  '@angular/forms'; /* Import this after importing FormsModule and ReactiveFormsModule in app.module.ts */
import { HttpClient } from '@angular/common/http';

import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  faPaperPlane = faPaperPlane;
  faCoffee = faCoffee;

  contactForm: FormGroup; 

  myimage: string = "assets/images/IMG_9021.jpg";
  

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      id:['0'],
      fullname: [''],  
      email: [''],
      message: ['']
    });
  }

  

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
    
    this.createContactForm() 
    // this.contactForm = this.formBuilder.group({
    //   id:['0'],
    //   fullname: [''],  
    //   email: [''],
    //   message: ['']
    // });
  }
  
  onSubmit() {
    //var formData: any = new FormData(); 
    //const formData = new FormData();
    console.log('Your form data : ', this.contactForm.value );
    //formData.append("fullname", this.contactForm.get('fullname').value);
    //formData.append("email", this.contactForm.get('email').value);
    //formData.append("message", this.contactForm.get('message').value);
    
    // for (var key of formData.entries()) {
		// 	console.log(key[0] + ', ' + key[1])
		// }
 
    //const headers = new HttpHeaders();
      //  headers.append('Content-Type', 'multipart/form-data');
        //let clonedHeaders = headers.append('Accept', 'application/json')
//{headers: headers} put next to formData

        return this.http.post('http://localhost:3000/api/contactest', {
          "fullname":this.contactForm.get('fullname').value,
          "email":this.contactForm.get('email').value,
          "message": this.contactForm.get('message').value
      }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

}







  ngOnInit(): void { }

}
