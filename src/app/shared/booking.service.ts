import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  orders: Order[];

  constructor(private http: HttpClient) { }

  getBooking() {
    return this.http.get(environment.BaseUrl + 'orders');
  }
}
