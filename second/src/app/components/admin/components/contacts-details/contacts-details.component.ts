import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { IUser } from '../../user';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent {
  constructor(
    private activateRoute: ActivatedRoute, 
    private adminService: AdminService
    ){}
  id!: number;
  userInfo!: Observable<IUser>;

  ngOnInit () {
    this.activateRoute.params.subscribe((params => this.id = params?.['id']))
    this.userInfo = this.adminService.getPerson(this.id)    
  }
}
