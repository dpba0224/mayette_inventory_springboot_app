import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Api } from '../service/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  imports: [ CommonModule ],
  templateUrl: './supplier.html',
  styleUrl: './supplier.css',
})
export class Supplier implements OnInit{
  constructor(private apiService: Api, private router: Router) {}
  suppliers: any[] = [];
  message: string = '';

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.apiService.getAllSuppliers().subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this.suppliers = res.suppliers;
        } else {
          this.showMessage(res.message);
        }
      },
      error: (error) => {
        this.showMessage(
          error?.error?.message ||
            error?.message ||
            'Unable to get suppliers' + error
        );
      },
    });
  }

  //Navigate to add supplier Page
  navigateToAddSupplierPage(): void {
    this.router.navigate([`/add-supplier`]);
  }

  //Navigate to edit supplier Page
  navigateToEditSupplierPage(supplierId: string): void {
    this.router.navigate([`/edit-supplier/${supplierId}`]);
  }

  //Delete a supplier
  handleDeleteSupplier(supplierId: string):void{
    if (window.confirm("Are you sure you want to delete this supplier?")) {
      this.apiService.deleteSupplier(supplierId).subscribe({
        next:(res:any) =>{
          if (res.status === 200) {
            this.showMessage("Supplier deleted successfully")
            this.getSuppliers(); //reload the suppliers
          }
        },
        error:(error) =>{
          this.showMessage(error?.error?.message || error?.message || "Unable to Delete Supplier" + error)
        }
      })
    }
  }

  showMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 4000);
  }
}
