import { AboutMeComponent } from './components/aboutMe/aboutMe.component';
import { CalcComponent } from './components/calc/calc.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [{
  path: "",
  component: MainComponent,
  children: [{
    path: "",
    component: HomeComponent
  },
  {
    path: "ders",
    component: HomeComponent
  },

  {
    path: "ders/:numberOfLecture",
    component: CalcComponent
  },
{
  path:"aboutMe",
  component:AboutMeComponent
}]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
