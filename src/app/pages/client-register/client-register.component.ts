import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface ContactForm {
  "name": string;
  "rol": boolean;
  "dni": string;
  "telephone": string;
  "email": string
  "password": string;
  
}
@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  model = {
    name: '',
    rol: false,
    dni: '',
    telephone: '',
    email: '',
    password: ''

  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {

    console.log('Form values', form);

  }
}
