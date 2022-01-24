import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})
export class InsideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

}
