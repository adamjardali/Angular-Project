// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchTerm: string = '';
  filteredUsers: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    // Replace 1 with the desired page number
    this.userService.getUsers(1).subscribe((data: any) => {
      this.users = data.data;
      this.filteredUsers = this.users; // Initialize filteredUsers with all users
    });
  }

  // Create a method to navigate to the detail page when a card is clicked
  goToDetailPage(userId: number) {
    this.router.navigate(['/card-detail', userId]);
  }

  // Create a method to filter users based on searchTerm
  searchUsers() {
    this.filteredUsers = this.users.filter((user: any) => {
      return user.id.toString().includes(this.searchTerm);
    });
  }
}
