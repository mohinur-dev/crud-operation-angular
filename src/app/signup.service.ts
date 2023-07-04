import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userup } from './userup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:8080';

  constructor(private client: HttpClient) { }

  userSignUp(Userup:Userup) {
    this.baseUrl = 'http://localhost:8080/signup'
    return this.client.post(this.baseUrl, Userup);
  }
}
