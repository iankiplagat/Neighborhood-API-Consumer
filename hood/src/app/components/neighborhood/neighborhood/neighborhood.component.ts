import { HttpClient } from '@angular/common/http';
import { NeighborhoodService } from './../../../services/neighborhood/neighborhood.service';
import { Neighborhood } from './../../../interfaces/neighborhood/neighborhood';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.css'],
})
export class NeighborhoodComponent implements OnInit {
  currentIndex = -1;
  neighbor!: any;
  neighborhood: Neighborhood = {
    id: '',
    name: '',
    neighborhood_desc: '',
    location: '',
    health_tell: '',
    police_number: '',
  };

  constructor(
    private neighborhoodservice: NeighborhoodService,
    private http: HttpClient
  ) {}

  // tslint:disable-next-line: typedef
  findNeighborhood() {
    this.neighborhoodservice.fetchNeighborhoodApi().subscribe(
      response => {
        this.neighbor = response;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  // tslint:disable-next-line: typedef
  onSubmit(neighborhood: any) {
    this.neighborhoodservice.create(neighborhood).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(neighborhood);
  }
  // tslint:disable-next-line: typedef
  updateHood(neighborhood: Neighborhood) {
    this.neighborhoodservice.update(this.neighborhood.id, neighborhood).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(neighborhood.id);
  }

  ngOnInit(): void {}
}
