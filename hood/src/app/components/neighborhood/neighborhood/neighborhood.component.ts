import { HttpClient } from '@angular/common/http';
import { NeighborhoodService } from './../../../services/neighborhood/neighborhood.service';
import { Neighborhood } from './../../../interfaces/neighborhood/neighborhood';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.css']
})
export class NeighborhoodComponent implements OnInit {

  neighborhood: Neighborhood[] = [];

  constructor(private neighborhoodservice: NeighborhoodService, private http: HttpClient) {
   }

   // tslint:disable-next-line: typedef
   findHood(){
     this.neighborhoodservice.fetchHoodApi().subscribe(
       (res) => {
          this.neighborhood = res;

     }, error => {
       console.error(error);
     }
     );
   }

  ngOnInit(): void {
  }

}

