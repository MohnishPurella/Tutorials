import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intermediate',
  standalone: true,
  imports: [],
  templateUrl: './intermediate.component.html',
  styleUrl: './intermediate.component.css'
})
export class IntermediateComponent {

  constructor(
    private router:Router
  ){ }
  
  javaHomePage() {
    this.router.navigate(['/java']);
  }

}
