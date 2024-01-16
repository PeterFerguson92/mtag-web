import { Component, OnInit } from '@angular/core';
import data from "../../../data/locationmap.json";
import authors from "../../../data/volunteer/volunteer.json";

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent implements OnInit {

  public locationmap = data;
  constructor() { }
   // Author
   public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
  }

}
