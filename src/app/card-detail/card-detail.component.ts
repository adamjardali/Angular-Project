import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router
import { UserService } from '../user.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  card: any;
  userId!: number; // Use the "!" operator to indicate it will be initialized

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchUserData();
  }

  fetchUserData() {
    this.userService.getUserById(this.userId).subscribe((data: any) => {
      this.card = data.data;
    });
  }

  // Method to navigate back to the user list
  goBack() {
    this.router.navigate(['/user-list']);
  }
}
