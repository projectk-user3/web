import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuStatus = false;
  @Output() navbarClicked = new EventEmitter<boolean>();

  loginUser = '';
  constructor(private _router: Router) { }

  ngOnInit() {
    this.loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
  }

  logout() {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }

  menuClicked() {
    this.menuStatus = !this.menuStatus;
    this.navbarClicked.emit(this.menuStatus);
  }
}
