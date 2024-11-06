import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnChanges {
  @Input() ministries: any;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.ministries.currentValue);
    this.ministries = changes.ministries.currentValue.sort((a: { index: number; }, b: { index: number; }) => a.index - b.index);
  }
}
