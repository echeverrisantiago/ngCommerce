import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../../services/productos.service';
/* import { Products } from './../productos.interface'; */
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  dataSource: any[];

  displayedColumns: string[] = ['No.','name','price','stock','actions'];
  constructor(
    private productosService: ProductosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.indexProducts();
  }

  indexProducts(){
    this.productosService.index()
    .subscribe((products) => {
      if(products){
        this.dataSource = products;
      }
    })
  }

  deleteProduct(id: any, i: any){
    this.productosService.delete(id)
    .subscribe((data) => {
      this.indexProducts();
    });
    };
}
