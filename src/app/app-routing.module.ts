import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: RestaurantsComponent},
  { path: "restaurant", component: RestaurantDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
