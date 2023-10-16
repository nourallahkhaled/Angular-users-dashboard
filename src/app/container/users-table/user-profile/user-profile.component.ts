import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  selectedUser: User;
  userId : number;

  userService: UserService = inject(UserService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  paramMapObs;

  ngOnInit(){
    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.userId = +data.get('id');
      this.onGetUsers();
    })
  }

  onGetUsers(){
    this.userService.getUsers().subscribe((data: any) => {
      this.selectedUser = data.users.find(user => user.id === this.userId);
    });
  }

  ngOnDestroy(){
    this.paramMapObs.unsubscribe();
  }
}
