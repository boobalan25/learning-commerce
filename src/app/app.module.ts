import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenderSpecificSectionComponent } from './components/gender-specific-section/gender-specific-section.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomepageService } from './services/homepage.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    GenderSpecificSectionComponent,
    ProductListComponent,
    LoginRegisterComponent,
    UserDetailsComponent,
    ProductCardComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomepageService,
    AuthService,
    TokenStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
