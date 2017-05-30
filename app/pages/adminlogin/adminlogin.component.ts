import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'adminlogin.component.html'
})

export class AdminLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    errorMessage = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        // reset login status
    }

    login() {
        this.loading = true;
        console.log(this.model.username, this.model.password);
        if (this.model.username == 'admin' && this.model.password == 'admin') {
            this.router.navigateByUrl('home');
            this.loading = false;
            this.errorMessage = '';
        } else {
            this.errorMessage = 'Incorrect Username and Password ';
            this.loading = false;
        }


    }
}
