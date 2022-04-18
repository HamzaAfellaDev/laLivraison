import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  // Id of the restaurant selected by the customer
  restaurantId:number = 0;

  // Details of the restaurant selected by the customer
  restaurantSelected: Restaurant = {
    id: 0,
    name: '',
    image: '',
    delivery: false,
    takeaway: false,
    description: '',
    city: ''
  }; 

  constructor(private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Capture query data
    this.activatedRoute.queryParams.subscribe( data => {
      this.restaurantId = data['id']
    })
    // Getting details of restaurant selected from RestaurantDetailsService
    this.restaurantsService.getRestaurant(this.restaurantId).subscribe( result => {
      this.restaurantSelected = <Restaurant>result
    })
  }

  

     
  

}
