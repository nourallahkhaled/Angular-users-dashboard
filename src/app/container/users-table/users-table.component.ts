import { Component } from '@angular/core';


@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  users = [
    {
      id: 1,
      name: "Menna Mohamed",
      imageURL:"https://icons-for-free.com/iconfiles/png/512/female+person+user+woman+young+icon-1320196266256009072.png",
      email: "mennamohamed@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Mai Hesham",
      email: "maihesham@gmail.com",
      imageURL:"https://cdn-icons-png.flaticon.com/512/219/219969.png",
      status: "Active",
    },
    {
      id: 3,
      name: "Manar Maher",
      email: "manarmaher@gmail.com",
      imageURL:"https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Mohamed Khaled",
      email: "mohamedkhaled@gmail.com",
      imageURL:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      status: "Active",
    },
  ]
  
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
