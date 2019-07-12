import { Injectable } from '@angular/core';
import { RegUser } from './reguser.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReguserService {
  reguserlist: RegUser[];

  constructor(private http: HttpClient) { }

  getUsersList() {
      return this.http.get(environment.apiBaseUrl + '/reguser' );
  }
}
