import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';

const routes: Routes = [
    {
        path: '',
        component: ProductosComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [CommonModule]
})
export class ProductosRoutingModule { }

