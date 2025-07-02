import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
    id: number;
    data: {
      name: string;
      email: string;
    };
}

@Injectable({ providedIn: 'root' })
export class NewsletterService {
  private endpointUrl: string = "https://test-request-vin5.onrender.com/";

  constructor(private httpClient: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = { name, email };

    return this.httpClient.post<NewsletterResponse>(this.endpointUrl + "api", data);
  }
}
