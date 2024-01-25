import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createMember(data: any): Observable<any> {
    const url = environment.apiUrl + '/members/';
    return this.http.post(url, data);
  }

  createTransaction(data: any): Observable<any> {
    const url = environment.apiUrl + '/members/transaction';
    return this.http.post(url, data);
  }

  getWeeklyEvents(): Observable<any> {
    const url = environment.apiUrl + '/activities/weekly';
    return this.http.get(url);
  }

  getEventDetail(id: string): Observable<any> {
    const url = environment.apiUrl + '/activities/event/' + id;
    return this.http.get(url);
  }

  getActivePrograms(): Observable<any> {
    const url = environment.apiUrl + '/activities/program/active';
    return this.http.get(url);
  }

  getProgramDetail(id: string): Observable<any> {
    const url = environment.apiUrl + '/activities/program/' + id;
    return this.http.get(url);
  }

  getMinistry(): Observable<any> {
    const url = environment.apiUrl + '/ministries/';
    return this.http.get(url);
  }

  getMinistryDetail(id: string): Observable<any> {
    const url = environment.apiUrl + '/ministries/detail/' + id;
    return this.http.get(url);
  }

  getResource(resourceUrl: string): Observable<any> {
    return this.http.get(environment.apiUrl + resourceUrl);
  }
}
