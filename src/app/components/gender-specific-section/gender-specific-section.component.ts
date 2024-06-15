import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gender } from 'src/app/modals/gender-enum';

@Component({
  selector: 'app-gender-specific-section',
  templateUrl: './gender-specific-section.component.html',
  styleUrls: ['./gender-specific-section.component.scss']
})
export class GenderSpecificSectionComponent implements OnInit {
  constructor(private router: Router) {

  }

  currentGender: Gender | undefined = undefined;

  ngOnInit() {
    if (this.router.url.replace('\/', '') === 'men') {
      this.currentGender = Gender.MEN
    } else if (this.router.url.replace('\/', '') === 'women') {
      this.currentGender = Gender.WOMEN
    }
    if (this.currentGender === undefined) {
      this.router.navigate(['home']);
    }
  }
}
