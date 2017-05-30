import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoryComponent } from '../pages/inventory/inventory.component';
import { ViewDetailsComponent } from '../pages/viewdetails/viewdetails.component';
import { LoginComponent } from '../pages/login/login.component';
import { AdminLoginComponent } from '../pages/adminlogin/adminlogin.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: InventoryComponent },
    { path: 'viewdetails/:id', component: ViewDetailsComponent },
    { path: 'userLogin', component: LoginComponent },
    {path: 'adminLogin', component: AdminLoginComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
