import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { ProductosCrearComponent } from './productos-crear/productos-crear.component';
import { ProductosEditComponent } from './productos-edit/productos-edit.component';

@NgModule({
  declarations: [ProductosCrearComponent, ProductosEditComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
