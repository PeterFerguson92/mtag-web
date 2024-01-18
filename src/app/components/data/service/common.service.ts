import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getTimeDetails(startTime: string, endTime: string): string {
    return `${startTime.substring(0, 5)} - ${endTime.substring(0, 5)}`;
  }

  getDateInitials(day: string): any {
    return `${day.substring(3, day.length)}`;
  }

  getFormattedDate(rawDate: string): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const t = new Date(rawDate);
    return t.getDate() + ' ' + monthNames[t.getMonth()] + ' ' + t.getFullYear();
  }
}
