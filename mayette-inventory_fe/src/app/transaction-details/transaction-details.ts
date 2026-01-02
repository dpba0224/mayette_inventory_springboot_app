import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../service/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-details.html',
  styleUrl: './transaction-details.css',
})
export class TransactionDetails implements OnInit {
  constructor(
    private apiService: Api,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  transactionId:string | null = '';
  transaction: any = null;
  status:string = '';
  message:string = ''

  ngOnInit(): void {
    //extract transaction id from routes
    this.route.paramMap.subscribe(params =>{
      this.transactionId = params.get('transactionId');
      if (this.transactionId) {
        this.getTransactionDetails();
      }
    })
  }

  getTransactionDetails():void{
    if (this.transactionId) {
      this.apiService.getTransactionById(this.transactionId).subscribe({
        next:(transactionData: any) =>{
          if (transactionData && transactionData.status === 200 && transactionData.transaction) {
            this.transaction = transactionData.transaction;
            this.status = this.transaction.status || '';
          } else {
            this.showMessage('Transaction data not found or invalid response');
          }
        },
        error:(error)=>{
          this.showMessage(
            error?.error?.message ||
              error?.message ||
              'Unable to Get Transaction by id ' + error
          );
        }
      })
    }
  }

  //UPDATE STATUS
  handleUpdateStatus():void{
    if (this.transactionId && this.status) {
      this.apiService.updateTransactionStatus(this.transactionId, this.status).subscribe({
        next:(result)=>{
          this.router.navigate(['/transaction'])
        },
        error:(error)=>{
          this.showMessage(
            error?.error?.message ||
              error?.message ||
              'Unable to Update a Transaction ' + error
          );
        }
      })
    }
  }


    //SHOW ERROR
    showMessage(message: string) {
      this.message = message;
      setTimeout(() => {
        this.message = '';
      }, 4000);
    }
}
