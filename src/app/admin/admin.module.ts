import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthService } from './../services/auth/auth.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos-actuales/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores-actuales/proveedores.component';
import { PedidosComponent } from './pedidos/pedidos-actuales/pedidos.component';
import { SharedModule } from './../shared/shared.module';
import { ProductosCrearComponent } from './productos/productos-crear/productos-crear.component';
import { ProductosEditComponent } from './productos/productos-edit/productos-edit.component';
import { ProveedoresEditComponent } from './proveedores/proveedores-edit/proveedores-edit.component';
import { ProveedoresCreateComponent } from './proveedores/proveedores-create/proveedores-create.component';
import { PedidosCreateComponent } from './pedidos/pedidos-create/pedidos-create.component';
import { PedidosShowComponent } from './pedidos/pedidos-show/pedidos-show.component';


@NgModule({
  declarations: [ProductosComponent, ProveedoresComponent, PedidosComponent, ProductosCrearComponent, ProductosEditComponent, ProveedoresEditComponent, ProveedoresCreateComponent, PedidosCreateComponent, PedidosShowComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class AdminModule { }
