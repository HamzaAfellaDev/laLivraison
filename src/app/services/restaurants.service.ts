import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor( private http: HttpClient ) {}

  // Getting the list of restaurants from API
  getAll(){
    return this.http.get(`${environment.apiUrl}/restaurants`)
  }

  // Getting details of restaurant selected from API
  getRestaurant(id: number){
    return this.http.get(`${environment.apiUrl}/restaurants/`+ id)
  }

}
