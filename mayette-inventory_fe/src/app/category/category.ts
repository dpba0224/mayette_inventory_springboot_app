import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Api } from '../service/api';

interface Categories {
  id: string,
  name:string
}

@Component({
  selector: 'app-category',
  imports: [CommonModule, FormsModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {
  categories: Categories[] = [];
  categoryName:string = '';
  message: string = '';
  isEditing:boolean = false;
  editingCategoryId:string | null = null;

  constructor(private apiService: Api){}

  ngOnInit(): void {
    this.getCategories();
  }

  //GET ALL CATEGORIES
  getCategories():void{
    this.apiService.getAllCategory().subscribe({
      next:(res:any) =>{
        if (res.status === 200) {
          this.categories = res.categories;
        }
      },
      error:(error) =>{
        this.showMessage(error?.error?.message || error?.message || "Unable to get all categories" + error)
      }
    })
  }


  //ADD A NEW CATEGORY
  addCategory():void{
    if (!this.categoryName) {
      this.showMessage("Category name is required");
      return;
    }
    this.apiService.createCategory({name:this.categoryName}).subscribe({
      next:(res:any) =>{
        if (res.status === 200) {
          this.showMessage("Category added successfully")
          this.categoryName = '';
          this.getCategories();
        }
      },
      error:(error) =>{
        this.showMessage(error?.error?.message || error?.message || "Unable to save category" + error)
      }
    })
  }





  // EDIT CATEGORY
  editCategory():void{
    if (!this.editingCategoryId || !this.categoryName) {
      return;
    }
    this.apiService.updateCategory(this.editingCategoryId, {name:this.categoryName}).subscribe({
      next:(res:any) =>{
        if (res.status === 200) {
          this.showMessage("Category updated successfully")
          this.categoryName = '';
          this.isEditing = false;
          this.getCategories();
        }
      },
      error:(error) =>{
        this.showMessage(error?.error?.message || error?.message || "Unable to edit category" + error)
      }
    })
  }

  //set the category to edit
  handleEditCategory(category:Categories):void{
    this.isEditing = true;
    this.editingCategoryId = category.id;
    this.categoryName = category.name
  }

  //Delete a category
  handleDeleteCategory(caetgoryId: string):void{
    if (window.confirm("Are you sure you want to delete this categoy?")) {
      this.apiService.deleteCategory(caetgoryId).subscribe({
        next:(res:any) =>{
          if (res.status === 200) {
            this.showMessage("Category deleted successfully")
            this.getCategories(); //reload the category
          }
        },
        error:(error) =>{
          this.showMessage(error?.error?.message || error?.message || "Unable to Delete category" + error)
        }
      })
    }
  }

  showMessage(message:string){
    this.message = message;
    setTimeout(() =>{
      this.message = ''
    }, 4000)
  }
}
