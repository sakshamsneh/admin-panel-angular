import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  selectedFood: Food = {
    _id: '',
    fpic: '',
    fname: '',
    fdesc: '',
    fprice: null,
    category_id: '',
  };
  foods: Food[];

  constructor(private http: HttpClient) { }

  getFood() {
    return this.http.get(environment.BaseUrl + 'foods');
  }

  postFood(newFood: Food) {
    return this.http.post(environment.BaseUrl + 'foods', newFood);
  }

  updateFood(food: Food) {
    return this.http.put(environment.BaseUrl + 'foods/' + food._id, food);
  }

  deleteFood(foodId: string) {
    return this.http.delete(environment.BaseUrl + 'foods/' + foodId);
  }
}
