// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component'; // Import the CardDetailComponent

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'card-detail/:id', component: CardDetailComponent }, // Define the route with a parameter
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
