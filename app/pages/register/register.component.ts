import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { InventoryService } from '../../providers/inventory.service';
import { User } from '../../models/users';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    providers: [InventoryService]
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    errorMessage = '';
    private users: User[];

    constructor(
        private inventoryService: InventoryService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
            this.users = JSON.parse(localStorage.getItem('users'));
            var keys = Object.keys(this.users);
            var id = this.users[keys.length - 1].userId
            this.model.userId = ++id;
            this.model.noOfBooks = 0;
            this.model.imgUrl = 'images/profile.png';
            this.model.books = [];
    }

    register() {
        this.loading = true;
        if (this.model.userId) {
            this.users.push(this.model);
            this.errorMessage = '';
            localStorage.setItem('users', JSON.stringify(this.users));
            this.router.navigateByUrl('userLogin');
        } else {
            this.errorMessage = 'Incorrect Username and Password ';
        }
        this.loading = false;
    }
}
