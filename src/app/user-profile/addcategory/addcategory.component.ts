import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
    this.categoryservice.selectedCategory = {
        _id: '',
        categoryname: '',
    };
  }

  onSubmit(form: NgForm) {
    this.categoryservice.postCategory(form.value).subscribe(
      res => {
          alert('Category Inserted!');
          this.resetForm(form);
      },
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
