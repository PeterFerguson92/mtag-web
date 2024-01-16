import { Component } from '@angular/core';
import { SermonHelperService } from 'src/app/components/helper/sermon/sermon-helper.service';

@Component({
  selector: 'app-next-sermon',
  templateUrl: './next-sermon.component.html',
  styleUrls: ['./next-sermon.component.css']
})
export class NextSermonComponent extends SermonHelperService {
  
}
