import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('authjwt') && localStorage.getItem('authjwt') != '') {

    } else {
      this.router.navigate(['login']);
    }
  }
  
}
