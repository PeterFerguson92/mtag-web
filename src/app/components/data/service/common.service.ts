import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private sanitizer: DomSanitizer) {}

  getTimeDetails(startTime: string, endTime: string): string {
    return `${startTime.substring(0, 5)} - ${endTime.substring(0, 5)}`;
  }

  getDateInitials(day: string): any {
    return `${day.substring(3)}`;
  }

  getDisplayDate(rawDate: string, rawEndDate: string): string {
    const formatted = this.getFormattedDate(rawDate);
    const names = formatted.split(' ');

    const formattedEndDate = this.getFormattedDate(rawEndDate);
    const namesEndDate = formattedEndDate.split(' ');

    if (rawEndDate !== rawDate) {
      return `${names[0]} ${names[1]} ${names[2]} - ${namesEndDate[0]} ${namesEndDate[1]} ${namesEndDate[2]}`;
    } else {
      return `${names[0]} ${names[1]} ${names[2]}`;
    }
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

  getImgPath(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://drive.google.com/thumbnail?id=${id}`
    );
  }
}
