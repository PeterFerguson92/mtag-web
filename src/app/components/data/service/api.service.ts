import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl + '/members/';

  constructor(private http: HttpClient) { }

  createMember(data: any): Observable<any>  {
    return this.http.post(this.baseUrl, data);
  }
}
