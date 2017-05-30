import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        // reset login status
    }

    login() {
        this.loading = true;
        console.log(this.model.username, this.model.password);
        this.loading = false;
    }
}
