import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Api } from './service/api';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    title = 'mayette-inventory';
    constructor(
      private apiService: Api,
      private router: Router,
      private cdr: ChangeDetectorRef
    ) {}


  isAuth():boolean{
    return this.apiService.isAuthenticated();
  }

  isAdmin():boolean{
    return this.apiService.isAdmin();
  }

  logOut():void{
    this.apiService.logout();
    this.router.navigate(["/login"])
    this.cdr.detectChanges();
  }
}
