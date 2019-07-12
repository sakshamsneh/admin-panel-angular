import { Component, OnInit } from '@angular/core';
import { ReguserService } from 'src/app/shared/reguser.service';
import { RegUser } from 'src/app/shared/reguser.model';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(private reguserservice: ReguserService) { }

  ngOnInit() {
    this.getBooking();
  }

  getBooking() {
    this.reguserservice.getUsersList().subscribe(
      res => {
        this.reguserservice.reguserlist = res as RegUser[];
      }
    );
  }
}
