import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmConstrucaoComponent } from './components/em-construcao/em-construcao.component';


export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "em-construcao",
    component: EmConstrucaoComponent
  }

];
