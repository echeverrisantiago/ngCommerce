import { Component, OnInit } from '@angular/core';
import { PedidosService } from './../../../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  dataSource: any[];

  displayedColumns: string[] = ['No.','name','email','nit','phone','actions'];
  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.indexProveedores();
  }

  indexProveedores(){
    this.pedidosService.index()
    .subscribe((products) => {
      if(products){
        console.log(products);
        this.dataSource = products;
      }
    })
  }

  deleteProvider(id: any, i: any){
    this.pedidosService.delete(id)
    .subscribe((data) => {
      this.indexProveedores();
    });
    };

}

