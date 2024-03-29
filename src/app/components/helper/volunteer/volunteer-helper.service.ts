import { Injectable, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import volunteer from '../../data/volunteer/volunteer.json';

@Injectable({
  providedIn: 'root'
})
export class VolunteerHelperService implements AfterContentInit {
  // pagination
  page: number = 1;
  // Volunteer
  public volunteerblock = volunteer;
  public volunteerdetails = volunteer;
  constructor(private route: ActivatedRoute) { }
  // Show Social
  public visible : boolean = false;
  socialTrigger(item: { visible: boolean; }){
    item.visible = !item.visible;
  }
  // Volunteer Details
  public getVolunteer(id: any) {
    this.volunteerdetails = volunteer.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.getVolunteer(this.route.snapshot.params.id);
  }
}
