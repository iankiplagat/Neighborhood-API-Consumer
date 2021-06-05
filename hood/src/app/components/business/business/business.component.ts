import { Business } from './../../../interfaces/business/business';
import { BusinessService } from './../../../services/business/business.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business: Business[] = [];
  constructor(private http: HttpClient, private businessservice: BusinessService) { }

  // tslint:disable-next-line: typedef
  findBusiness() {
    this.businessservice.fetchBusiness().subscribe(
      (res) => {
        this.business = res;

      }, error => {
        console.error(error);
      }
    );
  }
  ngOnInit(): void {
  }

}
