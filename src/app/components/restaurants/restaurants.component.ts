import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  // Restaurant list
  restaurants: Restaurant[] = [];

  // Delivery and takeaway status
  delivery: boolean = false;
  takeaway: boolean = false;
  

  constructor( private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute, private router:Router ) {}

  ngOnInit(): void {
    this.getAllRestaurants()
  }

  // Getting the list of restaurants from RestaurantService
  getAllRestaurants(){
    this.restaurantsService.getAll().subscribe((result) => this.restaurants = <Restaurant[]>result)
  }

  // Navigate to restaurant details page selected and Pass the restaurantId selected in query param
  getSelectedRestaurant(restaurantId: number){
    this.router.navigateByUrl('/restaurant?id='+restaurantId)
  }


}
