import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private authService: AuthService) {}

    username;
    password;
    loginError = false;

    ngOnInit() {}

    onLoggedin() {
        this.loginError = false;
        if(this.username != "cyrine" || this.password != "cyrine"){
            this.loginError = true;
        } else {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard'])
        }
    }
}
