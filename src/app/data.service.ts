import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  clicked(): void {
    return console.log('clicked');
  }

  getUsers() {
    return this.http.get('http://reqres.in/api/users')
  }
}
