import { Injectable } from '@angular/core';

export class Contact{
  id: Number;
  fullname: String;
  email: String;
  message: String;
}



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
}
