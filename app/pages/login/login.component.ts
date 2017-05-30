import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/users';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    loginIs = false;
    sessionUser='';
    message = '';
    private users: User[];
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.users = JSON.parse(localStorage.getItem('users'));
        this.sessionUser = JSON.parse(localStorage.getItem('loginUser'));
        if(this.sessionUser){
            this.router.navigateByUrl('home');
        }
    }

    login() {
        this.loading = true;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username == this.model.username && this.users[i].password == this.model.password) {
                this.loginIs = true;
            } else {
                this.loginIs = false;
            }
        }
        if (this.loginIs) {
            this.message = 'login success';
            this.loading = false;
            localStorage.setItem('loginUser', JSON.stringify(this.model.username));
            location.reload();
            this.router.navigateByUrl('home');
        } else {
            this.message = 'Incorrect Login';
            this.loading = false;
        }
        console.log(this.model.username, this.model.password);

    }
}
