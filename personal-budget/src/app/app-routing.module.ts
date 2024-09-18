import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from  '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';


const routes: Routes = [
  {
    path : '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path : 'about',
    component: AboutComponent,
    // pathMatch: 'prefix'
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : '**',
    component: P404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
