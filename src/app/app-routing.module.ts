import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GenderSpecificSectionComponent } from './components/gender-specific-section/gender-specific-section.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomePageComponent },
  { path: 'men', component: GenderSpecificSectionComponent },
  { path: 'women', component: GenderSpecificSectionComponent },
  { path: 'userdetails', component: UserDetailsComponent },
  { path: 'login', component: LoginRegisterComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
