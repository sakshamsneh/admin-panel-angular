import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/shared/food.service';
import { Food } from 'src/app/shared/food.model';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/shared/category.model';

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewfoodComponent implements OnInit {

  constructor(private foodservice: FoodService, private categoryservice: CategoryService) { }

  ngOnInit() {
    this.getFood();
    this.getCategory();
  }

  getFood() {
    this.foodservice.getFood().subscribe(
      res => {
        this.foodservice.foods = res as Food[];
      }
    );
  }

  getCategory() {
    this.categoryservice.getCategory().subscribe(
      res => {
        this.categoryservice.categorylist = res as Category[];
      },
    );
  }

  onSubmit(form: NgForm) {
    this.foodservice.updateFood(form.value).subscribe(
      res => {
        this.getFood();
        this.resetForm(form);
        }
    );
  }

  fUpdate(food: Food) {
    this.foodservice.selectedFood = food;
  }

  fDelete(foodId: string) {
    this.foodservice.deleteFood(foodId).subscribe(
      res => {
        this.getFood();
      }
    );
  }

  resetForm(form: NgForm) {
    this.foodservice.selectedFood = {
        _id: '',
        fpic: '',
        fname: '',
        fdesc: '',
        fprice: null,
        category_id: '',
    };
    this.categoryservice.selectedCategory = {
        _id: '',
        categoryname: '',
    };
    form.resetForm();
  }
}
