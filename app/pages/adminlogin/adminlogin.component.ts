import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'adminlogin.component.html'
})

export class AdminLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    sessionUser="";
    errorMessage = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.sessionUser = JSON.parse(localStorage.getItem('loginUser'));
        if(this.sessionUser){
            this.router.navigateByUrl('home');
        }
    }

    login() {
        this.loading = true;
        console.log(this.model.username, this.model.password);
        if (this.model.username == 'admin' && this.model.password == 'admin') {            
            this.loading = false;
            this.errorMessage = '';
            localStorage.setItem('loginUser', JSON.stringify(this.model.username));
            this.router.navigateByUrl('dashboard');
        } else {
            this.errorMessage = 'Incorrect Username and Password ';
            this.loading = false;
        }


    }
}
