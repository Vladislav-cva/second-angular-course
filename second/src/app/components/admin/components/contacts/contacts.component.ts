import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Observable, tap } from 'rxjs';
import { IUser } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  constructor (public adminService: AdminService) {};
  persons$?: Observable<IUser[]>;

  persons: IUser[] = []


  ngOnInit (): void {    
  //  this.persons$ = this.adminService.getPersonsList().pipe(tap(user => {
  //   console.log(user);
  //  }))

   this.adminService.getPersonsList().pipe(
    tap(users => {
      this.persons.push(...users) 
    }
    )
   ).subscribe()
  }
 }
