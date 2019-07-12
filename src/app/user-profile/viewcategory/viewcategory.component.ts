import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/shared/category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {

  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categoryservice.getCategory().subscribe(
      res => {
        this.categoryservice.categorylist = res as Category[];
      },
    );
  }

  onUpdateCat(form: NgForm) {
    this.categoryservice.updateCategory(form.value).subscribe(
      res => {
        this.getCategory();
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    );
  }

  cUpdate(category: Category) {
    this.categoryservice.selectedCategory = category;
  }

  cDelete(categoryId: string) {
    this.categoryservice.deleteCategory(categoryId).subscribe(
      res => {
          this.getCategory();
      },
      err => {
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    this.categoryservice.selectedCategory = {
        _id: '',
        categoryname: '',
    };
    form.resetForm();
  }
}
