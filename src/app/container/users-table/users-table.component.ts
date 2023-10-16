import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent implements OnInit {
  users : User[] = [];
  userService: UserService = inject(UserService)
  
  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(){
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.users;
    });
  }

  editingUser: any = null;
  isEditing = false;
  
  // Edit user
  editUser(user: any) {
    this.editingUser = { ...user };
    this.isEditing = true;
  }
  
  // Cancel the edit process
  cancelEdit() {
    this.editingUser = null;
    this.isEditing = false;
  }
  
  // Update user
  updateUser() {
    // Find the index of the user being edited.
    const index = this.users.findIndex(u => u.id === this.editingUser.id);
  
    if (index !== -1) {
      this.users[index] = this.editingUser;
        
      this.editingUser = null;
      this.isEditing = false;
    }
  }
  
  // Delete user
  deleteUser(user : any) {
    if (confirm('Are you sure you want to delete this user?')) {
      
      const index = this.users.indexOf(user);
      if (index !== -1) {
        this.users.splice(index, 1);
  }
}
  }
}
