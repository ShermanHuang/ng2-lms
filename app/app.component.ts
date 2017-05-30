import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { InventoryService } from './providers/inventory.service';
import { Book } from './models/books';;
import { User } from './models/users';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [InventoryService]
})
export class AppComponent {
    sessionUser = '';
    constructor(private inventoryService: InventoryService, private router: Router) {
        this.sessionUser = JSON.parse(localStorage.getItem('loginUser'));
        if (!JSON.parse(localStorage.getItem('users'))) {
            this.inventoryService.loadInventoryUsingObservable1().subscribe(users => {
                localStorage.setItem('users', JSON.stringify(users));
            }, error => { });
        }
        if (!JSON.parse(localStorage.getItem('books'))) {
            this.inventoryService.loadInventoryUsingObservable().subscribe(books => {
                localStorage.setItem('books', JSON.stringify(books));
            }, error => { });
        }
    }
    logout() {
        localStorage.removeItem('loginUser');
       location.reload();
        this.router.navigateByUrl('home');
    }
}
