import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from'@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from  '@angular/forms'; /* Import this after importing FormsModule and ReactiveFormsModule in app.module.ts */
import { HttpClient } from '@angular/common/http';


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


  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
    
    this.createContactForm() 
  }
  
  onSubmit() {
    var formData: any = new FormData(); 
    //console.log('Your form data : ', this.contactForm.value );
    formData.append("fullName", this.contactForm.get('fullName').value);
    formData.append("email", this.contactForm.get('email').value);
    formData.append("message", this.contactForm.get('message').value);

    this.http.post('http://localhost:3000/api/contact', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

}

  ngOnInit(): void { }

}
