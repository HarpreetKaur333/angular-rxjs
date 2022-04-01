import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class CommonHeaderComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

}
