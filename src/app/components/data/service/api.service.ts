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

  getWeeklyEvents(): Observable<any> {
    const url = environment.apiUrl + '/activities/weekly';
    return this.http.get(url);
  }

  getEventDetail(id: string): Observable<any> {
    const url = environment.apiUrl + '/activities/event/' + id;
    return this.http.get(url);
  }
}
