import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { InventoryService } from '../../providers/inventory.service';
import { User } from '../../models/users';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'users.component.html',
    providers: [InventoryService]
})
export class UserComponent implements OnInit {

    private users: User[];
    constructor(private inventoryService: InventoryService, private router: Router) { }

    ngOnInit() {
        this.inventoryService.loadInventoryUsingObservable1().subscribe(users => {
            this.users = users;
        }, error => { });
    }

}

