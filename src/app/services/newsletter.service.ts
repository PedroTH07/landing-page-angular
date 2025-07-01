import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
    message: string
}

@Injectable({ providedIn: 'root' })
export class NewsletterService {
  private endpointUrl: string = "https://util.devi.tools/";

  constructor(private httpClient: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = { name, email };

    return this.httpClient.post<NewsletterResponse>(this.endpointUrl + "api/v1/notify", data);
  }
}
