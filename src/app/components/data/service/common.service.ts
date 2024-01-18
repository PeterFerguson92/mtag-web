import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  getTimeDetails(startTime: string, endTime: string): string {
    return `${startTime.substring(0, 5)} - ${endTime.substring(0, 5)}`;
  }

  getDateInitials(day: string): any {
    return `${day.substring(3, day.length)}`;
  }
}
