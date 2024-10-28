import { Routes } from '@angular/router';
import { JavaHomeComponent } from './Components/java-home/java-home.component';
import { HomeComponent } from './Components/home/home.component';
import { IntermediateComponent } from './Components/java-home/intermediate/intermediate.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path:'java', component: JavaHomeComponent },
    { path: 'java/intermediate', component: IntermediateComponent }
];
