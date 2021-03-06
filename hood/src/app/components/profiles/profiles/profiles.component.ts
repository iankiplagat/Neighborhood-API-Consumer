import { ProfilesService } from './../../../services/profiles/profiles.service';
import { Profile } from './../../../interfaces/profiles/profiles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profile: Profile[] = [];

  constructor(private profileservice: ProfilesService) { }

  // tslint:disable-next-line: typedef
  findProfiles() {
    this.profileservice.fetchProfileApi().subscribe(
      (res) => {
        this.profile = res;

      }, error => {
        console.error(error);
      }
    );
  }
  // tslint:disable-next-line: typedef
  updateProfile(id: any, profile: Profile) {
    this.profileservice.update(id, profile).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(id);
  }

  ngOnInit(): void {
  }

}
