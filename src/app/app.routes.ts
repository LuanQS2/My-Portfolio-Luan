import { Routes } from '@angular/router';
import { EmConstrucaoComponent } from './components/em-construcao/em-construcao.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';


export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "em-construcao",
    component: EmConstrucaoComponent
  },
  {
    path: "projetos",
    component: ProjectsComponent
  }

];
