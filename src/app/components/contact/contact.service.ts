import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment/environment.secret';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiKey: string = environment.contactApiKey;

  constructor(private http: HttpClient) {}

    SendEmail(emailMessage: any) { 
      return this.http.post(this.apiKey, emailMessage, { responseType: 'text' })
      .subscribe(data => {
        location.href = 'https://mailthis.to/confirm'
      })
    }
  }

interface EmailMessage {
  Name: string,
  EmailAddress: string,
  Phone: number,
  Message: string
}



