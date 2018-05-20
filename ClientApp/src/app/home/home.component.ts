import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public auth: AuthService) { }

  ngOnInit() {
    if(!this.auth.isAuthenticated()){
        this.auth.login();
    }
  }
}
