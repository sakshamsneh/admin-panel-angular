import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selectedCategory: Category = {
    _id: '',
    categoryname: '',
  };
  categorylist: Category[];

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(environment.BaseUrl + 'category');
  }

  postCategory(newCategory: Category) {
    return this.http.post(environment.BaseUrl + 'category', newCategory);
  }

  updateCategory(category: Category) {
    return this.http.put(environment.BaseUrl + 'category/' + category._id, category);
  }

  deleteCategory(categoryId: string) {
    return this.http.delete(environment.BaseUrl + 'category/' + categoryId);
  }
}
