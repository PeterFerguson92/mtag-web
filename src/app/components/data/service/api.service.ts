import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  PaymentIntent,
} from '@stripe/stripe-js';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createResource(url: string, data: any): Observable<any> {
    return this.http.post(environment.apiUrl + url, data);
  }

  createPaymentIntent(data: any): Observable<PaymentIntent> {
    const url = `${environment.apiUrl}/finance/create-payment-intent`;
    return this.http.post<PaymentIntent>(
      url,
      data
    );
  }

  getResource(resourceUrl: string): Observable<any> {
    return this.http.get(environment.apiUrl + resourceUrl);
  }
}
