import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-home',
  standalone: true,
  imports: [],
  templateUrl: './java-home.component.html',
  styleUrl: './java-home.component.css'
})
export class JavaHomeComponent {

  constructor(
    private router:Router
  ){ }
  
  advanceJavaHomePage() {
  throw new Error('Method not implemented.');
  }

  intermediateJavaHomePage() {
    this.router.navigate(['/java/intermediate']);
  }

  
  begineerJavaHomePage() {
  throw new Error('Method not implemented.');
  }

  homePage() {
    this.router.navigate(['']);
  }

}
