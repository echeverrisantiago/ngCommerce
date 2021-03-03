import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { ProductosComponent } from './productos/productos-actuales/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores-actuales/proveedores.component';
import { PedidosComponent } from './pedidos/pedidos-actuales/pedidos.component';
import { ProductosCrearComponent } from './productos/productos-crear/productos-crear.component';
import { ProductosEditComponent } from './productos/productos-edit/productos-edit.component';
import { ProveedoresEditComponent } from './proveedores/proveedores-edit/proveedores-edit.component';
import { ProveedoresCreateComponent } from './proveedores/proveedores-create/proveedores-create.component';
import { PedidosShowComponent } from './pedidos/pedidos-show/pedidos-show.component';
import { PedidosCreateComponent } from './pedidos/pedidos-create/pedidos-create.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'productos',
                pathMatch: 'full'
            },
            {
                path: 'productos',
                children: [
                    {
                        path: '',
                        component: ProductosComponent
                    },
                    {
                        path: 'create',
                        component: ProductosCrearComponent
                    },
                    {
                        path: ':id',
                        component: ProductosEditComponent
                    }
                ]
            },
            {
                path: 'proveedores',
                children: [
                    {
                        path: '',
                        component: ProveedoresComponent
                    },
                    {
                        path: 'create',
                        component: ProveedoresCreateComponent
                    },
                    {
                        path: ':id',
                        component: ProveedoresEditComponent
                    }
                ]
            },
            {
                path: 'pedidos',
                children: [
                    {
                        path: '',
                        component: PedidosComponent
                    },
                    {
                        path: 'create',
                        component: PedidosCreateComponent
                    },
                    {
                        path: ':id',
                        component: PedidosShowComponent
                    }
                ]
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [CommonModule]
})
export class AdminRoutingModule { }

