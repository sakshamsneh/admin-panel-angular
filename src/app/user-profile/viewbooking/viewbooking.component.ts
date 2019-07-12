import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/booking.service';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  constructor(private bookingservice: BookingService) { }

  ngOnInit() {
    this.getBooking();
  }

  getBooking() {
    this.bookingservice.getBooking().subscribe(
      res => {
        this.bookingservice.orders = res as Order[];
      }
    );
  }
}
