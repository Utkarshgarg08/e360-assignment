import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getUser } from 'src/state/app.actions';
import { userState } from 'src/state/app.reducer';
import { selectFeatureUser } from 'src/state/app.selector';
import { IUser } from '../models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy {
  title = 'e360';
  panelOpenState = false;
  users : IUser[] = [];
  private subscription = new Subscription();
  constructor(private store: Store<{user:userState}>) {
    this.getUsers();
    this.subscription.add(
    store.select(selectFeatureUser).subscribe(data =>{
      console.log(data)
      if(data){
        this.users = data
      }
    }))
  }

  ngOnInit(): void {
  }

  getUsers(){
    this.store.dispatch(getUser())
  }

  loading = false;

  performUpdate() {
    // Call the api to update the data, currently don't have an api to update the data so mocking it.
    this.loading = true;
    setTimeout(() => {
      // Your asynchronous action here...
      this.loading = false;
    }, 2000); // Simulated 2 seconds delay
  }

  selectedUser: IUser | undefined;

  editUser(user: IUser) {
    this.selectedUser = { ...user }; // Make a copy to avoid modifying the original object
  }

  saveChanges(updatedUser: IUser) {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users = [
        ...this.users.slice(0, index),
        updatedUser,
        ...this.users.slice(index + 1),
      ];
      this.selectedUser = undefined;
    }
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
