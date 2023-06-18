import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/components/admin/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
 @Input() user?: IUser
}
