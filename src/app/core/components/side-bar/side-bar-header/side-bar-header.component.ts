import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { USERS, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-side-bar-header',
  templateUrl: './side-bar-header.component.html',
  styles: [
  ]
})
export class SideBarHeaderComponent implements OnInit, OnDestroy {
  currentUser: USERS | null = null;
  userSubscription: Subscription | undefined;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    //get current user
    this.userSubscription = this.usersService.currentUser$.subscribe(
      (user: USERS | any) => {
        this.currentUser = user?.data;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
