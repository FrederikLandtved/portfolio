import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { environment } from 'src/environment/environment.secret';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  
  constructor(private builder: FormBuilder, private contactService: ContactService) { 
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      EmailAddress: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl(''),
      Message: new FormControl('', [Validators.required])
    })
  }
}