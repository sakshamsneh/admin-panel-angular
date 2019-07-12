import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/shared/food.service';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/shared/category.model';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  constructor(private foodservice: FoodService, private categoryservice: CategoryService) { }

  ngOnInit() {
    this.getCategory();
    this.categoryservice.selectedCategory = {
        _id: '',
        categoryname: '',
    };
    this.foodservice.selectedFood = {
        _id: '',
        fpic: '',
        fname: '',
        fdesc: '',
        fprice: null,
        category_id: '',
    };
  }

  onSubmit(form: NgForm) {
    this.foodservice.postFood(form.value).subscribe(
      res => {
        alert('FOOD ADDED!');
        this.resetForm(form);
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
