import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-box',
  templateUrl: './block-box.component.html',
  styleUrls: ['./block-box.component.css']
})
export class BlockBoxComponent {
  @Input() blocks: any;


}
