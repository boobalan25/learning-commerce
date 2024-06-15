import { Component, OnInit } from '@angular/core';
import { HomepageData } from 'src/app/modals/homepage-data';
import { Product } from 'src/app/modals/product';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public homepageData: HomepageData = new HomepageData();
  public products: Product[] = []

  constructor(private homepageService: HomepageService) {

  }

  ngOnInit() {
    this.homepageService.getHomepageProducts().subscribe((result: HomepageData) => {
      this.homepageData = result;
    });
  }
}
