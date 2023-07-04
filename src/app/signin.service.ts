import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userin } from './userin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private client: HttpClient) { }

  signinUser(user: Userin): Observable<Userin>{
    console.log(user);
    this.baseUrl = 'http://localhost:8080/';
    return this.client.post<Userin>(`${this.baseUrl}signin`, user);

  }
}
